import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SecurityRoutingModule } from './security-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SecurityModule { }
