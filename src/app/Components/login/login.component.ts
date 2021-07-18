import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
            
  }

  loginUser(){
    const user = {
      login: this.login,
      password: this.password
    };

    this.authService.authUser(user).subscribe(data => {
      if(!data.Success){
        console.log(data.msg);
        alert('Ошибка или типа того ...');
      } else {
        console.log(data.msg);
        alert('УСПЕХ!');
        this.router.navigate(['welcome']);
        this.authService.storeUser(data.user);
      }
    });
  };
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
