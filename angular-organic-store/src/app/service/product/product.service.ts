import {Injectable, OnDestroy} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable, Subscription, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnDestroy{

  addProductSub: Subscription;
  updateProductSub: Subscription;
  deleteProductSub: Subscription;

  constructor(private http: HttpClient) { }

  getAll() {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8080/api/product/all', {'headers': headers});
  }

  getProduct(id: number): any {
    const token = <string> localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', token)
      .set('Access-Control-Allow-Origin', '*');
    return this.http.get(`http://localhost:8080/api/product/get${id}`, {'headers': headers});
  }

  addProduct(formContent: Observable<Object>) {
    console.log('submit button')
    const token = <string> localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', token)
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post('http://localhost:8080/api/product/add', formContent, {'headers': headers})
      .subscribe();

  }

  updateProduct(product:any, id: number) {
    const token = <string> localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', token)
      .set('Access-Control-Allow-Origin', '*');
    return this.http.put('http://localhost:8080/api/product/update', {id: id, ...product}, {'headers': headers}).pipe(
      take(1)
    ).subscribe();
  }

  deleteProduct(id: number) {
    const token = <string> localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', token)
      .set('Access-Control-Allow-Origin', '*');
    return this.http.delete(`http://localhost:8080/api/product/delete/${id}`,{headers: headers}).pipe(
      take(1)
    ).subscribe();
  }

  ngOnDestroy() {
    this.addProductSub.unsubscribe();
    this.updateProductSub.unsubscribe();
    this.deleteProductSub.unsubscribe();
  }
}
