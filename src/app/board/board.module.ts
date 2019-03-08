/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */

import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatListModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BoardListComponent} from './board-list/board-list.component';
import {BoadRoutingModule} from './board.routing.module';
import {BoardDetailComponent} from './board-detail/board-detail.component';
import {BoardEditComponent} from './board-edit/board-edit.component';
import {BoardAddComponent} from './board-add/board-add.component';
@NgModule({
  declarations: [
    BoardListComponent,
    BoardDetailComponent,
    BoardEditComponent,
    BoardAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    BoadRoutingModule
  ],
  entryComponents: [
    BoardAddComponent,
    BoardDetailComponent,
    BoardEditComponent
  ]
})
export class BoardModule {

}
