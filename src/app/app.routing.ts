import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { WeatherWidgetComponent} from './Components/weather-widget/weather-widget.component'
import { TestComponent} from './Components/test/test/test.component';
import { ModuleWithProviders } from '@angular/core';
import { WelcomeComponent } from './Components/welcome/welcome.component';


const WEATHER_ROUTER:Routes = [
    {path: '', component: LoginComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'weather', component: WeatherWidgetComponent},
    {path: 'test', component: TestComponent}
]

export const weatherRouting:ModuleWithProviders<any> = RouterModule.forRoot(WEATHER_ROUTER)