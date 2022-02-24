import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {catchError, map, throwError} from "rxjs";
import {NotFoundError} from "../../errors/not-found-error";
import {BadReqError} from "../../errors/bad-req-error";
import {AppError} from "../../errors/app-error";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(username: String, password: String) {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post('http://localhost:8080/api/user/login', { username, password },  {observe: 'response', 'headers': headers}).pipe(
      map(response => {
        let token = <string> response.headers.get('Token');
        localStorage.setItem('token', token);
      }),
      catchError((error: Response) => this.handleError(error)));
  }

  logout(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (token){
      let decodedToken = jwtHelper.decodeToken(token);
      let expirationDate = jwtHelper.getTokenExpirationDate(token);
      let isExpired = jwtHelper.isTokenExpired(token);
      return !isExpired;
    }
    return false;
  }

  get currentUser(){
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token') as string;
    return jwtHelper.decodeToken(token);
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
