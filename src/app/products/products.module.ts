import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './pages/products/products.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ReqresModule } from 'reqresnexti';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReqresModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
