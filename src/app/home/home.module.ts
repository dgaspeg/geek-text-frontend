import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SecurityModule } from '../security/security.module';

@NgModule({
  declarations: [HomeComponent, MenuBarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SecurityModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class HomeModule { }
