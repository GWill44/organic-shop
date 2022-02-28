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
export class ProductFormComponent implements OnInit {

  categories$;

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('',[Validators.required, Validators.min(0)]),
    category: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')])
  });

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();
  }

  onSubmit(formContent: any) {
    this.productService.addProduct(formContent);
    this.router.navigate(['/admin/products']);
  }

  get title(){ return this.form.get('title'); }
  get price(){ return this.form.get('price'); }
  get category(){ return this.form.get('category'); }
  get imageUrl(){ return this.form.get('imageUrl'); }
}
