import {Injectable} from '@angular/core';
import {Product} from "../../model/product";
import {ShoppingCartItem} from "../../model/shopping-cart-item";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  updateCart(product: Product, addition: number) {
    let shoppingCart: ShoppingCartItem[] = this.getCart();
    let quantity = this.getItemQuantity(product) + addition;
    let cartProduct = {quantity: quantity, ...product};

    if(this.getItem(product)){
      let index = shoppingCart.findIndex(cartProduct => cartProduct.title === product.title);
      shoppingCart.splice(index, 1, cartProduct);
    }else{
      shoppingCart.push(cartProduct);
    }

    if (quantity<1) shoppingCart = shoppingCart.filter((cartProduct) => cartProduct.title !== product.title);

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
  }

  getCart(){
    return (localStorage.getItem('shoppingCart')) ?
      JSON.parse(<string>localStorage.getItem('shoppingCart')) : [];
  }

  getItemQuantity(product: Product){
    return this.getItem(product) ?
      this.getItem(product)!.quantity : 0;
  }

  getTotalItemQuantity(){
    let quantity = 0;
    let shoppingCart: ShoppingCartItem[] = this.getCart();
    for(let item of shoppingCart){
      quantity = quantity + item.quantity
    }
    return quantity;
  }

  getItem(product: Product){
    return this.getCart().find((shoppingCartItem: ShoppingCartItem) => shoppingCartItem.title === product.title);
  }
}

