import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductStore } from '../../state/products.store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [],
})
export class ProductListComponent implements OnInit {
  productList: Product[];

  constructor(
    private productService: ProductService,
    private store: ProductStore
  ) {}

  ngOnInit(): void {
    this.productService.getProducts()
      .snapshotChanges()
      .subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x['$key'] = element.key;
          this.productList.push(x as Product);
        });
      });
  }

  onEdit(product: Product){
    this.productService.setActualProduct(Object.assign({}, product));
  }

  onDelete(product: Product) {
    if(confirm('Borrar?')){
      this.productService.deleteProduct(product);
      this.productService.setActualProduct(new Product());
    }
  }
}
