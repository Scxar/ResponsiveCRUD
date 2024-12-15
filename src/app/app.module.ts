import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/interceptor.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    }
  ]
})
export class AppModule { }