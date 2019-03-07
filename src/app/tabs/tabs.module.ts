/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */

import {NgModule} from '@angular/core';
import {MatFormFieldModule, MatTabsModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TabsRoutingModule} from './tabs.routing.module';
import {NoAnimationTabsComponent} from './noanimation-tabs/noanimation.tabs.component';
@NgModule({
  declarations: [
    NoAnimationTabsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTabsModule,
    TabsRoutingModule
  ]
})
export class TabsModule {

}
