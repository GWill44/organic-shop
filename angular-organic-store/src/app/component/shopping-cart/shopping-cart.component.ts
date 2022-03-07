import { Component } from '@angular/core';
import {ShoppingCartService} from "../../service/shopping-cart/shopping-cart.service";
import {ProductService} from "../../service/product/product.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  constructor(public shoppingCartService: ShoppingCartService, private productService: ProductService) { }

  updateCart(productId: number, addition: number) {
   this.productService.getProduct(productId).subscribe(
       product => {
         console.log(product);
         this.shoppingCartService.updateCart(product, addition);
       }
   );
  }
}
