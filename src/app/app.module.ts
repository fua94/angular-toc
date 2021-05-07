import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsModuleInt } from './products/products.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductsModule } from 'productsnexti';

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductsModuleInt,
    ProductsModule,
    AuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
