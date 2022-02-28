import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryService} from "../../../service/category/category.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription, throwError} from "rxjs";
import {Router} from "@angular/router";
import {ProductService} from "../../../service/product/product.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy{

  categories: any;
  form = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    imageUrl: new FormControl('')
  })

  categoriesSub: Subscription;
  productSub: Subscription;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.categoriesSub = this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  onSubmit(formContent: any) {
    this.productSub = this.productService.addProduct(formContent)
      .subscribe({
        next: () => void this.router.navigate(['/admin/products']),
        error: (error: Response) => throwError(() => error)
      })
  }

  get username(){ return this.form.get('username'); }
  get password(){ return this.form.get('password'); }

  ngOnDestroy() {
    this.categoriesSub.unsubscribe();
    this.productSub.unsubscribe();
  }
}
