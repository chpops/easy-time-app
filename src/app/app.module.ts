import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './Components/weather-widget/weather-widget.component';
import { HeaderComponent } from './Components/header/header.component';
import { weatherRouting } from './weather.routing';
import { FormsModule }   from '@angular/forms';
import { TestComponent } from './Components/test/test/test.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    HeaderComponent,
    TestComponent,
    LoginComponent
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
