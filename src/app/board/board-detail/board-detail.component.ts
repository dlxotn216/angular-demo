import {BoardService} from '../shared/board.service';
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DialogData {
  boardKey: number;
}

/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-08
 */
@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css'],
  providers: [
    BoardService
  ]
})
export class BoardDetailComponent implements OnInit {

  board: BoardDto;

  constructor(private boardService: BoardService,
              public dialogRef: MatDialogRef<BoardDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  ngOnInit() {
    this.boardService.getBoard(this.data.boardKey)
      .subscribe(res => this.board = res.result);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
