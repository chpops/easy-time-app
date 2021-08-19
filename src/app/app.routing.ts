import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { WeatherWidgetComponent} from './Components/weather-widget/weather-widget.component'
import { CryptoComponent } from './Components/crypto/crypto.component';
import { ModuleWithProviders } from '@angular/core';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';

const WEATHER_ROUTER:Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'weather', component: WeatherWidgetComponent},
    {path: 'crypto', component: CryptoComponent},
    {path: 'forbidden', component: ForbiddenComponent}
]

export const weatherRouting:ModuleWithProviders<any> = RouterModule.forRoot(WEATHER_ROUTER)