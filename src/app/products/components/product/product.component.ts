import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [],
})
export class ProductComponent implements OnInit {
  product: Product = new Product();

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
      
      if(!key){
        this.productService.insertProduct(productForm.value).subscribe(data => {
          this.resetForm(productForm);
          this.toastr.success('Saved!');
        });
      }else{
        this.productService.updateProduct({$key: key, ...productForm.value});
      }
  
    }else{
      this.toastr.error('Empty values...');
    }

  }

  resetForm(productForm: NgForm) {
    productForm.reset();
    this.productService.setActualProduct(new Product());
  }
}
