import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product/product.service";
import {Subject, Subscription} from "rxjs";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy{
  products: Product[];
  productsSub: Subscription;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productsSub = this.productService.getAll()
      .subscribe((products : any) => {
        this.dtTrigger.next(
          this.products = products);
      });
  }

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
    this.dtTrigger.unsubscribe();
  }
}

