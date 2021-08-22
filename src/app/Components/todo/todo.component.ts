import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Todo } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  title: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
      console.log('[TodoComponent] - You are already logged in! Your token = ' + localStorage.getItem('token'));
      this.authService.getTodoList().subscribe((data: Todo[]) => this.todos = data);
      console.log(this.todos);
    } else {
      this.router.navigate(['/forbidden']);
      console.log('[TodoComponent] - You are NOT logged! Get away from here!');
    } 
  }
}
