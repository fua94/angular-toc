import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// service
import { ProductService } from '../../../services/product.service';
import { ProductsService } from '../state/products.service';
import { ProductsQuery } from '../state/products.query';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  name$: Observable<string>;
  price$: Observable<number>;

  constructor(
    public productService: ProductService,
    private toastr: ToastrService,
    private products: ProductsQuery,
    public productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.name$ = this.products.getName$;
    this.price$ = this.products.getPrice$;
    this.productService.getProducts();
  }

  onSubmit() {
    let name = '';
    let price = 0;
    this.name$.subscribe((e) => {
      name = e;
    });
    this.price$.subscribe((e) => {
      price = e;
    });

    // const key = this.productService.selectedProduct.$key;
    // if (key == undefined) {

    if (name != '' && price != 0) {
      this.productsService.insertProduct(name, price);
      this.resetForm();
      // this.toastr.success('Saved!');
    }

    // } else {
    //   this.productService.updateProduct({ $key: key, ...productForm.value });
    // }
  }

  resetForm() {
    this.productsService.setName('');
    this.productsService.setPrice(0);
  }
}
