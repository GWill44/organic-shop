import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  add(product){
    let shoppingCart = (localStorage.getItem('shoppingCart')) ?
      JSON.parse(<string>localStorage.getItem('shoppingCart')) : [];
    shoppingCart.push(product);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
  }

  getCart(){
    let shoppingCart = (localStorage.getItem('shoppingCart')) ?
      JSON.parse(<string>localStorage.getItem('shoppingCart')) : [];
    return shoppingCart;
  }
}
