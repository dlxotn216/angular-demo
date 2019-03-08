import {BoardService} from '../shared/board.service';
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

export interface DialogData {
  boardKey?: number;
}

/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-08
 */
@Component({
  selector: 'app-board-add',
  templateUrl: './board-add.component.html',
  styleUrls: ['./board-add.component.css'],
  providers: [
    BoardService
  ]
})
export class BoardAddComponent implements OnInit {
  boardForm: FormGroup;
  titleFormControl: FormControl = new FormControl();
  contentFormControl: FormControl = new FormControl();

  board: BoardDto;

  constructor(private boardService: BoardService,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<BoardAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.boardForm = this.formBuilder.group({
      title: this.titleFormControl,
      content: this.contentFormControl
    });
  }

  ngOnInit() {
    const myFormValueChanges$ = this.boardForm.valueChanges
      .subscribe(x => this.board = x);
  }

  onSave(): void {
    this.boardService.addBoard(this.board)
      .subscribe(res => {
        this.dialogRef.close({added: true});
      });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
