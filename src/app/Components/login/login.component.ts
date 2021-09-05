import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup = new FormGroup({})
  aSub: Subscription = new Subscription()
  email: string
  password: string
  error: any

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
      this.router.navigate(['/welcome']);
      console.log('[LoginComponent] - You are already logged in! Your token = ' + localStorage.getItem('token'));
    } else{
      console.log('[LoginComponent] - Please login! Input your email and password and submit it!');
      this.form = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/[а-яА-ЯёЁa-zA-Z0-9]+$/), Validators.minLength(3), Validators.maxLength(30)]),
        password: new FormControl(null, [Validators.required, Validators.pattern(/[а-яА-ЯёЁa-zA-Z0-9]+$/), Validators.minLength(1), Validators.maxLength(30)])
      })
    }  
  }

  ngOnDestroy(){
    if(this.aSub){
      this.aSub.unsubscribe();
    }
  }

  onSubmit(){
      this.form.disable();
      this.aSub = this.authService.login(this.form.value).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        console.log('[LoginComponent] - You are logged in! Your new token = ' + localStorage.getItem('token'));
        alert('Успешный вход! \n\nПосле нажатия на кнопку "Ок" - вы будете перенаправлены на стартовую страницу приложения! \n\n' + this.form.value.email + ' - Юный Падаван!' + '\nДа прибудет с тобой сила!')
        this.router.navigate(['/welcome']);
    },
      err => {
        console.log(err);
        this.form.enable();
      }
    )
  }
}