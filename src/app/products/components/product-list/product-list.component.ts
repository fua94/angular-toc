import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [],
})
export class ProductListComponent implements OnInit {
  constructor(
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.productService.productList = [];
      data.rows.forEach((element: Product) => {
        element['$key'] = element._id;
        this.productService.productList.push(element as Product);
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
