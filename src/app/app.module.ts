import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { weatherRouting } from './app.routing';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { WeatherWidgetComponent } from './Components/weather-widget/weather-widget.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { CryptoComponent } from './Components/crypto/crypto.component';
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    HeaderComponent,
    LoginComponent,
    WelcomeComponent,
    CryptoComponent
  ],
  imports: [
    BrowserModule,
    weatherRouting,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
