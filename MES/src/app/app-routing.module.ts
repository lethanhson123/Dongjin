import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { TscodeComponent } from './MES/tscode/tscode.component';
import { A01Component } from './MES/a01/a01.component';
import { B09Component } from './MES/b09/b09.component';
import { C02Component } from './MES/c02/c02.component';

const routes: Routes = [
  { path: '', redirectTo: '/A01', pathMatch: 'full' },
  {
    path: 'Homepage', component: HomepageComponent,
  }, 
  {
    path: 'Tscode', component: TscodeComponent,
  }, 
  {
    path: 'A01', component: A01Component,
  }, 
  {
    path: 'B09', component: B09Component,
  }, 
  {
    path: 'C02', component: C02Component,
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }









































































