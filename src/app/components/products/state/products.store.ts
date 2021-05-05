import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from 'src/app/models/product';


export interface ProductState extends EntityState<Product> {
  productSelected: Product;
  dataLoaded: boolean;
}

export function createInitialState(): ProductState {
  return {
    productSelected: new Product(),
    dataLoaded: false
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'product' })
export class ProductStore extends EntityStore<ProductState> {
  constructor() {
    super(createInitialState());
  }
}
