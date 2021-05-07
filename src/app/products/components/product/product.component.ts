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
  constructor(
    public productService: ProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts(1);
  }

  onSubmit(productForm: NgForm) {
    const product = productForm.value;

    if (product.name && product.price) {
      const key = this.productService.getActualProduct()._id;

      if (key) {
        this.productService
          .updateProduct({ _id: key, ...productForm.value })
          .subscribe(
            () => {
              this.resetForm(productForm);
              this.toastr.success('Saved!');
            },
            (response) => {
              this.toastr.error('Error: ' + response);
            }
          );
      } else {
        this.productService.insertProduct(productForm.value).subscribe(
          () => {
            this.productService.getProducts(1);
            this.resetForm(productForm);
            this.toastr.success('Saved!');
          },
          (response) => {
            this.toastr.error('Error: ' + response);
          }
        );
      }
    } else {
      this.toastr.error('Empty values...');
    }
  }

  resetForm(productForm: NgForm) {
    productForm.reset();
    this.productService.setActualProduct(new Product());
  }
}
