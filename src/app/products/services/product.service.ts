import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductQuery } from '../state/products.query';
import { ProductStore } from '../state/products.store';
import { environment } from 'src/environments/environment';

const apiRoute = `${environment.api}/products`;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: Product[];
  productSelected$: Observable<Product>;

  constructor(
    private http: HttpClient,
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

  getProducts(): Observable<any> {
    return this.http.get(`${apiRoute}?pageSize=100`);
  }

  insertProduct(product: Product): Observable<any> {
    const actualProduct: Product = {
      name: product.name,
      price: Number(product.price)
    };

    this.productList.push(actualProduct);
    return this.http.post(apiRoute, actualProduct);
  }

  updateProduct(product: Product) {
    // this.productList.update(product.$key, {
    //   name: product.name,
    //   price: product.price,
    // });
  }

  deleteProduct(product: Product) {
    // this.productList.remove(product.$key);
  }
}
