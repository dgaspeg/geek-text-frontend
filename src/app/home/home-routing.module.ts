import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'safety', loadChildren: () => import('../security/security.module').then(mod => mod.SecurityModule) },
    { path: 'shopping', loadChildren: () => import('../shopping-cart/shopping-cart.module').then(mod => mod.ShoppingCartModule) }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
