import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from '../state/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: Product[];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productList = this.populateList();
  }

  populateList(): Product[] {
    let auxProductList: Product[] = [];

    this.productService.getProducts()
      .snapshotChanges()
      .subscribe(item => {
        item.forEach(element => {
          const x = element.payload.toJSON();
          x['$key'] = element.key;
          auxProductList.push(x as Product);
        });
      });

      return auxProductList;
  }

  // onEdit(product: Product){
  //   this.productService.selectedProduct = Object.assign({}, product);
  // }

  onDelete(key) {
    this.productService.deleteProduct(key);
  }
}
