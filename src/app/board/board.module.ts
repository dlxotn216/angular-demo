/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */

import {NgModule} from '@angular/core';
import {MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BoardListComponent} from './board-list/board-list.component';
import {BoadRoutingModule} from './board.routing.module';
@NgModule({
  declarations: [
    BoardListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BoadRoutingModule
  ]
})
export class BoardModule {

}
