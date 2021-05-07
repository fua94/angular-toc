import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './pages/products/products.component';

import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [ProductsComponent, ProductListComponent, ProductComponent],
  imports: [CommonModule, FormsModule, ToastrModule.forRoot()],
  providers: [ProductService],
})
export class ProductsModuleInt {}
