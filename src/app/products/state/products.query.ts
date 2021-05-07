import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProductStore, ProductState } from './products.store';

@Injectable({ providedIn: 'root' })
export class ProductQuery extends QueryEntity<ProductState> {
  getProductSelected$ = this.select((state) => state.productSelected);
  getPage$ = this.select((state) => state.page);
  constructor(protected store: ProductStore) {
    super(store);
  }
}
