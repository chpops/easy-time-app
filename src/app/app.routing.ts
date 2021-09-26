import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/component/login.component';
import { WeatherWidgetComponent } from './Components/weather-widget/weather-widget.component';
import { CryptoComponent } from './Components/crypto/crypto.component';
import { ModuleWithProviders } from '@angular/core';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { TodoComponent } from './Components/todo/todo.component';
import { RegistrationComponent } from './Components/registration/registration.component';

const ALL_ROUTER: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'weather', component: WeatherWidgetComponent },
  { path: 'crypto', component: CryptoComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'registration', component: RegistrationComponent },
];

export const appRouting: ModuleWithProviders<any> =
  RouterModule.forRoot(ALL_ROUTER);
