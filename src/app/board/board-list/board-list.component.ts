import {Component, OnInit} from '@angular/core';
import {BoardService} from '../shared/board.service';
import {BoardDetailComponent} from '../board-detail/board-detail.component';
import {MatDialog} from '@angular/material';
import {BoardEditComponent} from '../board-edit/board-edit.component';
import {BoardAddComponent} from '../board-add/board-add.component';
/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */
@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css'],
  providers: [
    BoardService
  ]
})
export class BoardListComponent implements OnInit {
  displayedColumns = ['no', 'title', 'createdBy', 'createdDateTime', 'button'];
  dataSource: BoardDto[] = [];

  constructor(private boardService: BoardService,
              public dialog: MatDialog) {

  }

  ngOnInit() {
    this.boardService.getBoards({})
      .subscribe(res => {
        this.dataSource = res.result.content;
        this.dataSource.forEach((source, idx) => {
          source.no = res.result.totalElements - idx;
        });
      });
  }

  boardRowClick(row) {
    this.dialog.open(BoardDetailComponent, {
      width: '600px',
      height: '400px',
      data: {boardKey: row.key}
    });
  }

  onAdd(event) {
    event.stopPropagation();
    let dialogRef = this.dialog.open(BoardAddComponent, {
      width: '600px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.added) {
        this.ngOnInit();
      }
    });
  }

  onEdit(event, row) {
    event.stopPropagation();

    let dialogRef = this.dialog.open(BoardEditComponent, {
      width: '600px',
      height: '400px',
      data: {boardKey: row.key}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.edited) {
        this.ngOnInit();
      }
    });
  }

  onDelete(event, row) {
    event.stopPropagation();
    this.boardService.deleteBoard(row.key)
      .subscribe(res => {
        if (res && res.result) {
          this.ngOnInit();
        }
      })
  }
}
