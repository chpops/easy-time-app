import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { weatherRouting } from './app.routing';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { WeatherWidgetComponent } from './Components/weather-widget/weather-widget.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { CryptoComponent } from './Components/crypto/crypto.component';
import { HttpClientModule }   from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { TodoComponent } from './Components/todo/todo.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from '../ngmaterial.module';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';

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
    weatherRouting,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    MaterialAppModule,
    MatInputModule,
    MatButtonModule,
    DragDropModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
