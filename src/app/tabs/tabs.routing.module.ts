/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoAnimationTabsComponent} from './noanimation-tabs/noanimation.tabs.component';

const routes: Routes = [
  {
    path: '',
    component: NoAnimationTabsComponent
  }
];


@NgModule ({
  imports: [
    RouterModule.forChild (routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TabsRoutingModule {

}
