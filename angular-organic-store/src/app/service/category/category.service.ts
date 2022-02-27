import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories() {
    const token = <string> localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', token)
      .set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8080/api/category/all', {'headers': headers}).pipe(
      map(response => response),
      catchError((error: Response) => throwError(() => error))
    );
  }
}
