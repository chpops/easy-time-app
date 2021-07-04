import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { weatherRouting } from './app.routing';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { WeatherWidgetComponent } from './Components/weather-widget/weather-widget.component';
import { TestComponent } from './Components/test/test/test.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    HeaderComponent,
    TestComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    weatherRouting,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
