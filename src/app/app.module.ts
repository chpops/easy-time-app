import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { WeatherWidgetComponent } from './Components/weather-widget/weather-widget.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { CryptoComponent } from './Components/crypto/crypto.component';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { TodoComponent } from './Components/todo/todo.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { AuthService } from './shared/services/auth.service';

import { appRouting } from './app.routing';
import { MaterialAppModule } from '../ngmaterial.module';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    HeaderComponent,
    LoginComponent,
    WelcomeComponent,
    CryptoComponent,
    ForbiddenComponent,
    TodoComponent,
    RegistrationComponent
  ],
  imports: [
    appRouting,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    MaterialAppModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
