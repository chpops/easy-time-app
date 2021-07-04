import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    if (this.username == 'admin' && this.password == 'password')
    {
      alert('Login Success!')
      this.router.navigate(['/welcome']);
    }
    else{
      alert('Login Failed! \nTry Again!')

    }
  }

}
