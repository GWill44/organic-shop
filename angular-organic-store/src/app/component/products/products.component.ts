import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {CategoryService} from "../../service/category/category.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$;
  categories$;

  constructor(private productService: ProductService, private categoryService: CategoryService) {}

  ngOnInit(){
    this.products$ = this.productService.getAll();
    this.categories$ = this.categoryService.getAll();
  }

}
