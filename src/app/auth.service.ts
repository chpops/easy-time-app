import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // token: any;
  user: any;

  constructor(private http: HttpClient) { }

  authUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      'http://localhost:4200/login',
      user,
      {headers: headers}).pipe(map((response: any) => response.json()));
  };

  storeUser(user){
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

}
