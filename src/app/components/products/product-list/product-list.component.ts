import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService) { }

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
      })
  }

  onEdit(product: Product){
    this.productService.selectedProduct = Object.assign({}, product);
  }

  onDelete(product: Product){
    this.productService.deleteProduct(product);
    this.productService.selectedProduct = new Product();
  }

}
