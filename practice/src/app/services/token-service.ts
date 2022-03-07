import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  token: any = '';
  set setToken(value: any) {
    this.token = value;
  }
  get getToken() {
    return this.token;
  }
}
