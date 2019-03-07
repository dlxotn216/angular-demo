/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardListComponent} from './board-list/board-list.component';

const routes: Routes = [
  {
    path: '',
    component: BoardListComponent
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
export class BoadRoutingModule {

}
