import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/product';
import { ProductQuery } from '../state/products.query';
import { ProductStore } from '../state/products.store';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiRoot = 'http://52.224.12.214:3000/api/products/';

  totalPages: Array<any>;
  productList: Observable<any>;
  productSelected$: Observable<Product>;

  constructor(
    private productStore: ProductStore,
    private productQuery: ProductQuery,
    private httpClient: HttpClient
  ) {
    this.productSelected$ = this.productQuery.getProductSelected$;
  }

  getPage() {
    return this.productQuery.getValue().page;
  }

  setPage(page: number) {
    this.productStore.update({ page: page });
    console.log(page);
  }

  setActualProduct(product: Product) {
    this.productStore.update({ productSelected: product });
  }

  getActualProduct(): Product {
    return this.productQuery.getValue().productSelected;
  }

  getProducts(page: number) {
    const params = new HttpParams().set('page', String(page));
    return (this.productList = this.httpClient.get<any>(this.apiRoot, {
      params: params,
    }));
  }

  insertProduct(product: Product) {
    return (this.productList = this.httpClient.post<Product>(this.apiRoot, {
      name: String(product.name),
      price: Number(product.price),
    }));
  }

  updateProduct(product: Product) {
    return (this.productList = this.httpClient.put<Product>(
      this.apiRoot + product._id,
      {
        name: String(product.name),
        price: Number(product.price),
      }
    ));
  }

  deleteProduct(product: Product) {
    return (this.productList = this.httpClient.delete<Product>(
      this.apiRoot + product._id
    ));
  }
}
