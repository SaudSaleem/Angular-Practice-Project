import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    // custom header
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.options = { headers: headers };
  }
  private options: { headers: HttpHeaders };

  private url: string = 'http://127.0.0.1:3000/';
  login(credentials: { user_email: string; user_password: string }) {
    return this.http
      .post(this.url + 'login', JSON.stringify(credentials), this.options)
      .pipe(
        map((response: any) => {
          console.log('res',response.user.token)
          if(response.user.token)
          {
            localStorage.setItem('token',response.user.token)
          }
          return true;
        }),
        catchError((error: Response) => {
            return throwError(() => false); //expected errors
        })
      );
  }
  logout() {
    localStorage.removeItem('token')
  }
  //install @auth0/angular-jwt to check play with jwt token
  // we use this package to check expiry date of token
  isLoggedIn() {
    let jwtHelpler = new JwtHelperService();

    let token = localStorage.getItem('token')
    if(!token) return false
    //let expirationDate = jwtHelpler.getTokenExpirationDate(token)
    let isExpired = jwtHelpler.isTokenExpired(token)
    return !isExpired;
  }
  get currentUser()
  {
    let token = localStorage.getItem('token');
    if(!token) return null;
    let jwtHelpler = new JwtHelperService();
    console.log(jwtHelpler.decodeToken(token))
    return jwtHelpler.decodeToken(token)
  }
}
