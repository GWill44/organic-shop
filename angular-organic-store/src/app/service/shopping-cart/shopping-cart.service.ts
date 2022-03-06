import {Injectable} from '@angular/core';
import {Product} from "../../model/product";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  updateCart(product: Product, add: boolean) {
    let shoppingCart: CartProduct[] = this.getCart();

    let quantity = (add) ?
      this.getQuantity(product) + 1 :
      (this.getQuantity(product) === 0) ? 0 : this.getQuantity(product) - 1;

    let cartProduct = {quantity: quantity, ...product}

    let newShoppingCart = shoppingCart.filter((cartProduct) => cartProduct.title !== product.title);

    if(quantity > 0) newShoppingCart.push(cartProduct);
    localStorage.setItem('shoppingCart', JSON.stringify(newShoppingCart))

  }

  getCart(){
    return (localStorage.getItem('shoppingCart')) ?
      JSON.parse(<string>localStorage.getItem('shoppingCart')) : [];
  }

  getQuantity(product: Product){
    return this.getProduct(product) ?
      this.getProduct(product)!.quantity : 0;
  }

  getProduct(product: Product){
    return this.getCart().find((cartProduct: CartProduct) => cartProduct.title === product.title);
  }
}

export interface CartProduct {
  quantity: number;
  id: number;
  title: string;
  price: number;
  category: string;
  url: string;
}
