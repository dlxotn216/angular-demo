/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {View1Component} from './view1/view1.component';
import {View2Component} from './view2/view2.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: 'view1',
      component: View1Component
    }, {
      path: 'view2',
      component: View2Component
    }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class I18nExampleRoutingModule {

}
