import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuariosComponent} from '../content/users/list/user.list.component';
import {UsuarioDetalleComponent} from '../content/users/detail/user.detail.component';
import {UsuariosService} from '../services/user/user.list.service';

const routes: Routes = [

  {
    path      : 'usuarios',
    component: UsuariosComponent,
    resolve : {
      data: UsuariosService
    }
  },
  {
    path     : 'usuarios/:id',
    component: UsuarioDetalleComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class UsersRoutingModule { }
