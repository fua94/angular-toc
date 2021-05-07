import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductStore } from '../../state/products.store';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [],
})
export class ProductListComponent implements OnInit {
  totalPages: Array<any>;
  productList: Product[];
  page: number;
  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private store: ProductStore
  ) {}

  ngOnInit(): void {
    this.page = this.productService.getPage();
    this.setPage(this.page);
  }

  setPage(page: number): void {
    this.productService.getProducts(page).subscribe((item) => {
      this.productList = [];
      this.totalPages = new Array(item.totalPages);
      item.rows.forEach((element) => {
        this.productList.push(element as Product);
      });
    });
  }

  onEdit(product: Product) {
    this.productService.setActualProduct(Object.assign({}, product));
  }

  onDelete(product: Product) {
    if (confirm('Borrar?')) {
      this.productService.deleteProduct(product).subscribe(() => {
        this.toastr.success('Delete!');
      });
      this.productService.setActualProduct(new Product());
    }
  }
}
