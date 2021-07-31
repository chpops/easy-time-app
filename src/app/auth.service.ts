import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // token: any;

  private URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient, private router: Router) { }

  authUser(user) {
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');

    // return this.http.post(
    //   'http://localhost:3000/login',
    //   user,
    //   {headers: headers}).pipe(map((response: any) => response));
    return this.http.post<any>(this.URL + '/signin', user);
  };

  // storeUser(user){
  //   localStorage.setItem('user', JSON.stringify(user));
  //   this.user = user;
  // }

}
