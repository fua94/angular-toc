import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product, createProduct } from './product.model';

export interface ProductsState extends EntityState<Product> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ProductsStore extends EntityStore<ProductsState> {
  constructor() {
    super(createProduct({ $key: '', name: '', price: 0 }));
  }

  setName(name: string) {
    this.update({ name });
  }
  setPrice(price: string) {
    this.update({ price });
  }
}
