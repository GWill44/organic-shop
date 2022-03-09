import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription, switchMap} from "rxjs";
import {Product} from "../../model/product";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  category: string | null;
  products: Product[] = [];
  filteredProducts: Product[];
  productsSub: Subscription;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) {}

  ngOnInit(){
    this.productsSub = this.productService.getAll().pipe(
      switchMap((products: any) => {
        this.products = products;
        return this.route.queryParamMap;
      }))
      .subscribe(params =>{
        this.category = params.get('category');
        this.applyFilter()
      });
  }

  private applyFilter() {
    this.filteredProducts = (this.category) ?
      this.products.filter(product => product.category === this.category) :
      this.products;
  }

  ngOnDestroy() {
    this.productsSub.unsubscribe();
  }
}
