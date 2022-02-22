import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';

import { ShareModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
