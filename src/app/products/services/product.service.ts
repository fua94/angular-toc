import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductQuery } from '../state/products.query';
import { ProductStore } from '../state/products.store';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: AngularFireList<any>;
  productSelected$: Observable<Product>;

  constructor(
    private firebase: AngularFireDatabase,
    private productStore: ProductStore,
    private productQuery: ProductQuery
  ) {
    this.productSelected$ = this.productQuery.getProductSelected$;
  }

  setActualProduct(product: Product){
    this.productStore.update({productSelected: product});
  }

  getActualProduct(): Product{
    return this.productQuery.getValue().productSelected;
  }

  getProducts() {
    return this.productList = this.firebase.list('product');
  }

  insertProduct(product: Product) {
    this.productList.push({
      name: product.name,
      price: product.price,
    });
  }

  updateProduct(product: Product) {
    this.productList.update(product.$key, {
      name: product.name,
      price: product.price,
    });
  }

  deleteProduct(product: Product) {
    this.productList.remove(product.$key);
  }
}
