import {Injectable} from '@angular/core';
import {Product} from "../../model/product";
import {ShoppingCartItem} from "../../model/shopping-cart-item";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  updateCart(product: Product, addition: boolean) {
    let shoppingCart: ShoppingCartItem[] = this.getCart();
    let quantity = (addition) ?
      this.getItemQuantity(product) + 1 :
      (this.getItemQuantity(product) === 0) ? 0 : this.getItemQuantity(product) - 1;
    let cartProduct = {quantity: quantity, ...product}
    let newShoppingCart = shoppingCart.filter((cartProduct) => cartProduct.title !== product.title);
    if(quantity > 0) newShoppingCart.push(cartProduct);
    localStorage.setItem('shoppingCart', JSON.stringify(newShoppingCart))
  }

  getCart(){
    return (localStorage.getItem('shoppingCart')) ?
      JSON.parse(<string>localStorage.getItem('shoppingCart')) : [];
  }

  getItemQuantity(product: Product){
    return this.getProduct(product) ?
      this.getProduct(product)!.quantity : 0;
  }

  getTotalItemQuantity(){
    let quantity = 0;
    let shoppingCart: ShoppingCartItem[] = this.getCart();
    for(let item of shoppingCart){
      quantity = quantity + item.quantity
    }
    return quantity;
  }

  getProduct(product: Product){
    return this.getCart().find((shoppingCartItem: ShoppingCartItem) => shoppingCartItem.title === product.title);
  }
}

