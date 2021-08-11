import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient, private router: Router) { }

  register(){}
    
    login(user: User): Observable<{token: string}> {
        return this.http.post<{token: string}>(this.URL + '/login', user);
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }

    logout() {
      localStorage.removeItem('token');
      // this.router.navigate(['/tasks']);
    }
  
    getToken() {
      return localStorage.getItem('token');
    }
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