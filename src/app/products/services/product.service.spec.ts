import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
      ],
    });
    service = TestBed.inject(ProductService);
  });

  it('#getProducts should return firebase list of products', () => {
    expect(service.getProducts() != null).toBe(true);
  });
});
