import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './Components/header/header.component';
import { WeatherWidgetComponent } from './Components/weather-widget/weather-widget.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { CryptoComponent } from './Components/crypto/crypto.component';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { TodoComponent } from './Components/todo/todo.component';
import { RegistrationComponent } from './Components/registration/registration.component';

import { AuthService } from './shared/services/auth.service';
import { appRouting } from './app.routing';
import { MaterialAppModule } from '../ngmaterial.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './Components/loader/interceptor.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoginModule } from './modules/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    HeaderComponent,
    WelcomeComponent,
    CryptoComponent,
    ForbiddenComponent,
    TodoComponent,
    RegistrationComponent,
  ],
  imports: [
    appRouting,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialAppModule,
    MatProgressSpinnerModule,
    LoginModule,
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
