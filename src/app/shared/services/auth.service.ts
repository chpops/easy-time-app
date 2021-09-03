import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoItem, User } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  title: string
  isCompleted: boolean
  list: string

  private URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient, private router: Router) { }

  register(user: User): Observable<{token: string}> {
    return this.http.post<{token: string}>(this.URL + '/registration', user)
  }
    
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

  getTodosList(): Observable<{todos: TodoItem[]}> {
    return this.http.get<{todos: TodoItem[]}>(this.URL + '/todos') 
  }
  
}