import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [],
})
export class ProductComponent implements OnInit {
  product: Product = new Product();

  constructor(
    public productService: ProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts();
    this.productService.productSelected$.subscribe(product => this.product = product);
  }

  onSubmit(productForm: NgForm) {
    const product = productForm.value;

    if(product.name && product.price){
      const id = this.productService.getActualProduct()._id;
      let method: Observable<any>;
      
      if(!id){
        method = this.productService.insertProduct(productForm.value);
      }else{
        method = this.productService.updateProduct({_id: id, ...productForm.value});
      }

      method.subscribe(data => {
        this.resetForm(productForm);
        this.toastr.success('Saved!');
      });
    }else{
      this.toastr.error('Empty values...');
    }

  }

  resetForm(productForm: NgForm) {
    productForm.reset();
    this.productService.setActualProduct(new Product());
  }
}
