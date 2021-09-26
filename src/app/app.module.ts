import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './shared/services/auth.service';
import { appRouting } from './app.routing';
import { MaterialAppModule } from '../ngmaterial.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './Components/loader/interceptor.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoginModule } from './modules/login/login.module';
import { RegistrationModule } from './modules/registration/registration.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    appRouting,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialAppModule,
    MatProgressSpinnerModule,
    LoginModule,
    RegistrationModule,
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
