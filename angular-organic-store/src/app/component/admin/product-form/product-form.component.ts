import {Component} from '@angular/core';
import {CategoryService} from "../../../service/category/category.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../service/product/product.service";
import {Observable, tap} from "rxjs";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  categories$;
  product$: Observable<Product>;
  id;
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('',[Validators.required, Validators.min(0)]),
    category: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')])
  });

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');

    this.product$ = this.productService.getProduct(this.id).pipe(
      tap((product: Product) => {
        this.form.controls['title'].setValue(product.title);
        this.form.controls['price'].setValue(product.price);
        this.form.controls['category'].setValue(product.category);
        this.form.controls['imageUrl'].setValue(product.url);
      })
    )
  }

  onSubmit(formContent) {
    if (this.id){
      this.productService.updateProduct(formContent, this.id);
      this.router.navigate(['/admin/products']);
    } else {
      this.productService.addProduct(formContent);
      this.router.navigate(['/admin/products']);
    }
  }

  delete(id: number) {
    if (confirm('Are you sure you wish to delete this product?')) {
      this.productService.deleteProduct(id);
      this.router.navigate(['/admin/products']);
    }
  }

  get title(){ return this.form.get('title'); }
  get price(){ return this.form.get('price'); }
  get category(){ return this.form.get('category'); }
  get imageUrl(){ return this.form.get('imageUrl'); }
}

