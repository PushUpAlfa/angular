import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FuseSharedModule} from '@fuse/shared.module';
import {
MatButtonModule,
MatCheckboxModule,
MatFormFieldModule,
MatInputModule,
MatIconModule,
MatMenuModule,
MatSelectModule,
MatTabsModule,
MatChipsModule,
MatTableModule,
MatPaginatorModule,
MatSortModule
} from '@angular/material';
import {ChartsModule} from 'ng2-charts';
import {CdkTableModule} from '@angular/cdk/table';
import {HomeComponent} from './home/home.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {HomeService} from '../services/home.service';
import {FuseContentComponent} from 'app/content/content.component';
import {UsuariosComponent} from './users/list/user.list.component';
import {UsuariosService} from '../services/user/user.list.service';
import {LoginComponent} from './authentication/login/login.component';
import {UsuarioDetalleComponent} from './users/detail/user.detail.component';
import {UsuarioDetalleService} from '../services/user/user.detail.service';
import {ParametrosComponent} from 'app/content/parameters/parameters.component';

@NgModule({
  declarations: [
    FuseContentComponent,
    ParametrosComponent,
    LoginComponent,
    HomeComponent,
    UsuariosComponent,
    UsuarioDetalleComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    FuseSharedModule,

    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    MatSortModule,
    ChartsModule,
    NgxChartsModule,

    FuseSharedModule
  ],
  providers: [
    HomeService,
    UsuariosService,
    UsuarioDetalleService
  ],
  exports: [
    FuseContentComponent
  ]
})
export class FuseContentModule {
}
