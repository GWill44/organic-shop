import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnDestroy {

  addDetailsSub: Subscription;
  orderIdSub: Subscription;
  addProductSub: Subscription;

  constructor(private http: HttpClient) { }

  placeOrder(order){
    const token = <string> localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', token)
      .set('Access-Control-Allow-Origin', '*');

    this.http.post('http://localhost:8080/api/order/addDetails',
      {user: order.user, date: order.date, ...order.shipping}, {'headers': headers}).subscribe();

    this.http.get(`http://localhost:8080/api/order/orderId/${order.date}`, {'headers': headers}).subscribe(
      orderId => {
        this.http.post('http://localhost:8080/api/order/addProducts',
          {orderId: orderId, orderProducts: order.shoppingCart}, {'headers': headers}).subscribe();
      }
    );
  }

  ngOnDestroy(): void {
    this.addDetailsSub.unsubscribe();
    this.orderIdSub.unsubscribe();
    this.addProductSub.unsubscribe();
  }
}
