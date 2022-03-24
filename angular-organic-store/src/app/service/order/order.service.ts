import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnDestroy {

  addDetailsSub: Subscription;
  addProductSub: Subscription;

  constructor(private http: HttpClient, private router: Router) { }

  placeOrder(order): void {
    const token = <string> localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', token)
      .set('Access-Control-Allow-Origin', '*');

    this.addDetailsSub = this.http.post('http://localhost:8080/api/order/addDetails',
      {user: order.user, date: order.date, ...order.shipping}, {'headers': headers}).subscribe(
        orderHash => {
          this. addProductSub = this.http.post('http://localhost:8080/api/order/addProducts',
            {hash: orderHash, orderProducts: order.shoppingCart}, {'headers': headers}).subscribe(
            () => {
              this.router.navigate(['/home']);
            },
            error => {
              console.log(error);
            }
          );
        }
    );
  }

  ngOnDestroy(): void {
    this.addDetailsSub.unsubscribe();
    this.addProductSub.unsubscribe();
  }
}
