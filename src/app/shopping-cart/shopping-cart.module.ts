import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
