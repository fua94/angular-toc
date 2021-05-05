import { Component, OnInit } from '@angular/core';

// service
import { ProductService } from '../../../services/product.service';

import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  constructor(
    public productService: ProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts();
  }

  onSubmit(productForm: NgForm) {
    const product = productForm.value;

    if(product.name && product.price){
      const key = this.productService.getActualProduct().$key;
      
      if(key){
        this.productService.updateProduct({$key: key, ...productForm.value});
      }else{
        this.productService.insertProduct(productForm.value);
      }
  
      this.resetForm(productForm);
      this.toastr.success('Saved!');
    }else{
      this.toastr.error('Empty values...');
    }
  }

  resetForm(productForm: NgForm) {
    productForm.reset();
    this.productService.setActualProduct(new Product());
  }
}
