import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from '../models/product';

export interface ProductState extends EntityState<Product> {
  productSelected: Product;
  dataLoaded: boolean;
  page: number;
}

export function createInitialState(): ProductState {
  return {
    productSelected: new Product(),
    dataLoaded: false,
    page: 1,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'product' })
export class ProductStore extends EntityStore<ProductState> {
  constructor() {
    super(createInitialState());
  }
}
