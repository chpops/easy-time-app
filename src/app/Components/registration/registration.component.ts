import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  form : FormGroup = new FormGroup({})
  aSub: Subscription = new Subscription()
  email: string
  password: string
  confirmpassword: string
  error: any

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/[а-яА-ЯёЁa-zA-Z0-9]+$/), Validators.minLength(3), Validators.maxLength(30)]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/[а-яА-ЯёЁa-zA-Z0-9]+$/), Validators.minLength(1), Validators.maxLength(30)]),
      confirmpassword: new FormControl(null, [Validators.required, Validators.pattern(/[а-яА-ЯёЁa-zA-Z0-9]+$/), Validators.minLength(1), Validators.maxLength(30)])
    })
  }
 
  ngOnDestroy(){
    if(this.aSub){
      this.aSub.unsubscribe();
    }
  }

  onSubmit(){
    this.form.disable();
    this.aSub = this.authService.register(this.form.value).subscribe(
      res => {
        alert('Поздравляем! \nУчётная запись успешно зарегистрирована. \nПосле нажатия на "ок" - вы будете перенаправлены на страницу входа!');
        console.log('[RegistrationComponent] - Your registration complete! Lets go login form!');
        this.router.navigate(['/login']);
    },
      err => {
        console.log(err);
        this.form.enable();
      }
    )
  }
}
