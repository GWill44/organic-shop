import {Injectable} from '@angular/core';
import {Product} from "../../model/product";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  addProduct(product: Product){
    let shoppingCart: CartProduct[] = this.getCart();
    let quantity = this.productQuantity(product, shoppingCart)
    let cartProduct = {quantity: quantity, ...product}

    let newShoppingCart = shoppingCart.filter((cartProduct) => cartProduct.title !== product.title);

    newShoppingCart.push(cartProduct);
    localStorage.setItem('shoppingCart', JSON.stringify(newShoppingCart))
  }

  getCart(){
    return (localStorage.getItem('shoppingCart')) ?
      JSON.parse(<string>localStorage.getItem('shoppingCart')) : [];
  }

  productQuantity(product: Product, shoppingCart: CartProduct[]) : number {
    let foundProduct = shoppingCart.find((cartProduct: CartProduct) => cartProduct.title === product.title);
    if (foundProduct) {
      return foundProduct.quantity + 1;
    }
    return 1;
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
