import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
      console.log('[TodoComponent] - You are already logged in! Your token = ' + localStorage.getItem('token'));
    } else {
      this.router.navigate(['/forbidden']);
      console.log('[TodoComponent] - You are NOT logged! Get away from here!');
    } 
  }
}
