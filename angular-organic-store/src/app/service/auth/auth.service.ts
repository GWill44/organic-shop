import {Injectable} from '@angular/core';
import {catchError, map, throwError} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserToken} from "../../model/user-token";

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
      catchError((error: Response) => throwError(() => error)));
    }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('shoppingCart');
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

  get currentUser(): UserToken | null {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token') as string;
    if (!token) return null;
    const userToken = jwtHelper.decodeToken(token);
    return new UserToken(userToken.id, userToken.sub, userToken.admin, userToken.exp);
  }
}
