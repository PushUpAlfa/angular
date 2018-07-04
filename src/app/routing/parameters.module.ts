import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParametrosComponent} from '../content/parameters/parameters.component';

const routes: Routes = [
  {
    path      : 'parametros',
    component: ParametrosComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class ParametersRoutingModule { }
