import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(this.authService.loggedIn()){
      console.log('[WelcomeComponent] - You are already logged in! Your token = ' + localStorage.getItem('token'));
    } else {
      this.router.navigate(['/forbidden']);
      console.log('[WelcomeComponent] - You are NOT logged! Get away from here!');
    }
  }
}
