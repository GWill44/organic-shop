import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";
import {ShoppingCartService} from "../../service/shopping-cart/shopping-cart.service";

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  toggleNavbar = true;

  constructor(
    public auth: AuthService,
    private router: Router,
    public shoppingCartService: ShoppingCartService) { }

  logout() {
    void this.auth.logout();
    void this.router.navigate(['']);
  }
}
