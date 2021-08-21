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
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(6)])
      })
    }  
  }

  ngOnDestroy(){
    if(this.aSub){
      this.aSub.unsubscribe();
    }
  }

  onSubmit(){
      this.aSub = this.authService.login(this.form.value).subscribe(
      res => {
        this.form.disable();
        localStorage.setItem('token', res.token);
        console.log('[LoginComponent] - You are logged in! Your new token = ' + localStorage.getItem('token'));
        this.router.navigate(['/welcome']);
    },
      err => {
        console.log(err);
      }
    )
  }
}