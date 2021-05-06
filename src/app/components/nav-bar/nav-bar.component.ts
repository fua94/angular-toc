import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Product } from 'src/app/products/models/product';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: []
})
export class NavBarComponent {

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
