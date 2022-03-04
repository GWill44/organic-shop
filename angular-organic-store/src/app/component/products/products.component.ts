import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription, switchMap} from "rxjs";
import {Product} from "../../model/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];
  filteredProducts: Product[];
  productsSub: Subscription;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) {}

  ngOnInit(){
    this.productService.getAll().pipe(
      switchMap((products: any) => {
        this.products = products;
        return this.route.queryParamMap;
      }))
      .subscribe(params =>{
        let category = params.get('category');
        this.filteredProducts = (category) ?
          this.products.filter(product => product.category === category) :
          this.products;
      });
    }
}
