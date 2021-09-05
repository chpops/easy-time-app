import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  radius: number;
  color: string;
  
  centered = false;
  disabled = false;
  unbounded = false;
  
  constructor(
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    console.log('[HeaderComponent] - You are logout now!');
    alert('Вы вышли из кабинета \n\nПосле нажатия на кнопку "Ок" - вы будете перенаправлены на страницу входа!');
  }
}
