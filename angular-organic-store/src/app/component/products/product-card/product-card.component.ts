import {Component, Input} from '@angular/core';
import {Product} from "../../../model/product";
import {ShoppingCartService} from "../../../service/shopping-cart/shopping-cart.service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{
  @Input('product') product: Product;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: Product) {
    this.cartService.add(product);
  }
}


