import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product/product.service";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  products$;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll();
  }
}
