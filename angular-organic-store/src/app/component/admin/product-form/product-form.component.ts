import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../service/category/category.service";
import {map} from "rxjs";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

}
