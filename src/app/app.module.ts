import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';

import {FuseModule} from '@fuse/fuse.module';
import {FuseSharedModule} from '@fuse/shared.module';

import {fuseConfig} from './fuse-config';

import {AppComponent} from './app.component';
import {FuseMainModule} from './layouts/layout.module';
import {MaterialModule} from './content/material.module';
import {LoginRoutingModule} from './routing/login.module';
import {HomeRoutingModule} from './routing/home.module';
import { ParametersRoutingModule} from './routing/parameters.module';
import {UsersRoutingModule} from './routing/users.module';

const appRoutes: Routes = [
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot(),

    // Routing
    LoginRoutingModule,
    HomeRoutingModule,
    ParametersRoutingModule,
    UsersRoutingModule,

    // Fuse Main and Shared modules
    FuseModule.forRoot(fuseConfig),
    FuseSharedModule,
    FuseMainModule,
    MaterialModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
