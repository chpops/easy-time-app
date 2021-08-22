import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo, User } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient, private router: Router) { }

  register(){}
    
  login(user: User): Observable<{token: string}> {
      return this.http.post<{token: string}>(this.URL + '/login', user)
    }

  loggedIn() {
      return !!localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  getTodoList() {
    return this.http.get(this.URL + '/todo')
  }
}