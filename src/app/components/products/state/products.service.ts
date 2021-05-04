import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ProductsStore } from './products.store';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  productList: AngularFireList<any>;
  constructor(
    protected productStore: ProductsStore,
    private firebase: AngularFireDatabase
  ) {}

  getProducts() {
    return (this.productList = this.firebase.list('product'));
  }

  insertProduct(name, price) {
    this.productList.push({
      name: name,
      price: price,
    });
  }

  deleteProduct(key) {
    this.productList.remove(key);
  }

  setName(name) {
    this.productStore.setName(name);
  }
  setPrice(price) {
    this.productStore.setPrice(price);
  }
}
