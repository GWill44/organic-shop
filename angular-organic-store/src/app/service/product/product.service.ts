import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    const token = <string> localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', token)
      .set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8080/api/products/all', {'headers': headers}).pipe(
      map(response => response),
      catchError((error: Response) => throwError(() => error))
    );
  }

  addProduct(formContent) {
    const token = <string> localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', token)
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post('http://localhost:8080/api/product/add', formContent, {'headers': headers}).pipe(
      map(response => response),
      catchError((error: Response) => throwError(() => error))
    );
  }
}
