import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title: string
  isCompleted: boolean
  list: string
  aSub: Subscription = new Subscription()
  todos: [{
    title: string
    isCompleted: boolean
    list: string
  }]

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
      console.log('[TodoComponent] - You are already logged in! Your token = ' + localStorage.getItem('token'));
      this.authService.getTodosList().subscribe(data => {
        // console.log(Object.keys(this.todos).length);
        // this.title = data.title;
        // this.isCompleted = data.isCompleted;
        // this.list = data.list;
        // console.log('test');
      });

  // getTodoList(){
  //   this.http.get<any>("http://localhost:4000/api/todos").subscribe(data => {
  //     this.title = data.title;
  //     this.isCompleted = data.isCompleted;
  //     this.list = data.list;
  // })
  // }
}
  }
}
