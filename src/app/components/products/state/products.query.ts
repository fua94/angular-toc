import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProductsStore, ProductsState } from './products.store';

@Injectable({ providedIn: 'root' })
export class ProductsQuery extends QueryEntity<ProductsState> {
  getName$ = this.select((state) => state.name);
  getPrice$ = this.select((state) => state.price);

  constructor(protected store: ProductsStore) {
    super(store);
  }
}
