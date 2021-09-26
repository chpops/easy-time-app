import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public incidents: any;
  form: FormGroup = new FormGroup({});
  aSub: Subscription = new Subscription();
  email: string;
  password: string;
  confirmpassword: string;
  error: any;
  radius: number;
  color: string;

  centered = false;
  disabled = false;
  unbounded = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern(/[а-яА-ЯёЁa-zA-Z0-9]+$/),
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/[а-яА-ЯёЁa-zA-Z0-9]+$/),
        Validators.minLength(1),
        Validators.maxLength(20),
      ]),
      confirmpassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(/[а-яА-ЯёЁa-zA-Z0-9]+$/),
        Validators.minLength(1),
        Validators.maxLength(20),
      ]),
    });
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onSubmit() {
    this.form.disable();
    this.aSub = this.authService.register(this.form.value).subscribe(
      (res) => {
        console.log(
          '[RegistrationComponent] - Your registration complete! Lets go login form!'
        );
        alert(
          'Учётная запись = ' +
            this.form.value.email +
            ' успешно зарегистрирована! \n\nПосле нажатия на кнопку "Ок" - вы будете перенаправлены на страницу входа! \n\nПопробуй использовать новые данные для входа.'
        );
        this.router.navigate(['/login']);
      },
      (err) => {
        this.incidents = err;
        this.form.enable();
      }
    );
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    const result = control.invalid && control.touched;

    return result;
  }
}
