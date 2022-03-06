import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {ShoppingCartService} from "../../../service/shopping-cart/shopping-cart.service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  quantity;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.quantity = this.shoppingCartService.getItemQuantity(this.product);
  }

  updateCart(product: Product, addition: number) {
    this.shoppingCartService.updateCart(product, addition);
    this.quantity = this.shoppingCartService.getItemQuantity(product);
  }

}


