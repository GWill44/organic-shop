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
    title: new FormControl('', [Validators.required]),
    price: new FormControl('',[Validators.required, Validators.min(0)]),
    category: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')])
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

  get title(){ return this.form.get('title'); }
  get price(){ return this.form.get('price'); }
  get category(){ return this.form.get('category'); }
  get imageUrl(){ return this.form.get('imageUrl'); }

  ngOnDestroy() {
    this.categoriesSub.unsubscribe();
    this.productSub.unsubscribe();
  }
}
