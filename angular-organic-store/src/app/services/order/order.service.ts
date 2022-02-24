import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {catchError, throwError} from "rxjs";
import {NotFoundError} from "../../errors/not-found-error";
import {BadReqError} from "../../errors/bad-req-error";
import {AppError} from "../../errors/app-error";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {}

  getOrders() {
    const token = <string> localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', token)
      .set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8080/api/order/all', {'headers': headers}).pipe(
      map(response => response),
      catchError((error: Response) => this.handleError(error)))
  }

  handleError(error: Response){
    if (error.status === 404){
      console.log(error);
      return throwError(new NotFoundError(error));
    }
    if (error.status === 400){
      console.log(error);
      return throwError(new BadReqError(error));
    }
    return throwError(new AppError(error));
  }
}
