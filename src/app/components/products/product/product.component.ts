import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// service
import { ProductService } from "../../../services/product.service";
import { Product } from 'src/app/models/product';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    public productService: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(productForm: NgForm) {
    const key = this.productService.selectedProduct.$key;

    if(key == undefined){
      this.productService.insertProduct(productForm.value);
    }else{
      this.productService.updateProduct({$key: key, ...productForm.value});
    }
    
    this.resetForm(productForm);
    this.toastr.success('Saved!');
  }
  
  resetForm(productForm: NgForm) {
    productForm.reset();
    this.productService.selectedProduct = new Product();
  }

}
