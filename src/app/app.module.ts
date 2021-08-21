import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AppRouting } from './app.routing';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { WeatherWidgetComponent } from './Components/weather-widget/weather-widget.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { CryptoComponent } from './Components/crypto/crypto.component';
import { HttpClientModule }   from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { TodoComponent } from './Components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    HeaderComponent,
    LoginComponent,
    WelcomeComponent,
    CryptoComponent,
    ForbiddenComponent,
    TodoComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
