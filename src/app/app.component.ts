import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './auth/models/user';
import { AuthService } from './auth/services/auth.service';
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
  user$: Observable<User>;

  constructor(
    private productService: ProductService,
    private authService: AuthService
  ) {
    this.selectedProduct$ = this.productService.productSelected$;
    this.user$ = this.authService.user$;    
  }

  async logOut(){
    try{
      this.authService.signOut();
    }catch(error){
      console.error('#sign-in logOut', error);
    }
  }
}
