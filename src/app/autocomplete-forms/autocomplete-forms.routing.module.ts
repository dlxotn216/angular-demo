/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WithMockComponent} from './with-mock/with-mock.component';
import {WithApiComponent} from './with-api/with-api.component';

const routes: Routes = [
  {
    path: '',
    component: WithMockComponent
  },
  {
    path: 'api',
    component: WithApiComponent
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
export class AutocompleteFormsRoutingModule {

}
