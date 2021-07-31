import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email : null,
    password : null  
  };
  
  success: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
            
  }

  loginUser(){
    this.authService.authUser(this.user).subscribe(data => {
      console.log(data);
      localStorage.setItem('token', data.token);
      this.router.navigate(['welcome']);
    })
    err => console.log(err);
    }
  }

    
  //   if (this.username == 'admin' && this.password == 'password')
  //   {
  //     alert('Login Success!')
  //     this.router.navigate(['/welcome']);
  //   }
  //   else{
  //     alert('Login Failed! \nTry Again!')

  //   }
  // }
