import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseNavigationModule, FuseSearchBarModule, FuseShortcutsModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { FuseContentModule } from 'app/content/content.module';
import { FuseFooterModule } from 'app/layouts/footer/footer.module';
import { FuseNavbarModule } from 'app/layouts/navbar/navbar.module';
import { FuseQuickPanelModule } from 'app/layouts/quick-panel/quick-panel.module';
import { FuseToolbarModule } from 'app/layouts/toolbar/toolbar.module';

import { FuseMainComponent } from './layout.component';


@NgModule({
    declarations: [
        FuseMainComponent,
    ],
    imports     : [
        RouterModule,

        MatSidenavModule,

        FuseSharedModule,

        FuseThemeOptionsModule,
        FuseNavigationModule,
        FuseSearchBarModule,
        FuseShortcutsModule,
        FuseSidebarModule,

        FuseContentModule,
        FuseFooterModule,
        FuseNavbarModule,
        FuseQuickPanelModule,
        FuseToolbarModule,
    ],
    exports     : [
        FuseMainComponent
    ]
})
export class FuseMainModule
{
}
