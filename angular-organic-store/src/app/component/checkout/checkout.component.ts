import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShoppingCartService} from "../../service/shopping-cart/shopping-cart.service";
import {OrderService} from "../../service/order/order.service";
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    addressLine1: new FormControl('', [Validators.required]),
    addressLine2: new FormControl(''),
    city: new FormControl('', [Validators.required]),
    postCode: new FormControl('', [Validators.required])
  });

  constructor(
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService,
    private authService: AuthService ) { }

  onSubmit() {
    let order = {
      user: this.authService.currentUser?.id,
      date: new Date().getTime(),
      shipping: this.form.value,
      shoppingCart: this.shoppingCartService.getCart()
    }
    this.orderService.placeOrder(order);
  }

  get firstName(){ return this.form.get('firstName'); }
  get lastName(){ return this.form.get('lastName'); }
  get addressLine1(){ return this.form.get('addressLine1'); }
  get addressLine2(){ return this.form.get('addressLine2'); }
  get city(){ return this.form.get('city'); }
  get postCode(){ return this.form.get('postCode'); }
}
