import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-crud-firebase';
  selectedProduct$: Observable<Product>;

  constructor(
    public productService: ProductService
  ) {
    this.selectedProduct$ = productService.productSelected$;
  }
}
