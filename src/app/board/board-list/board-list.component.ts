import {Component, OnInit} from '@angular/core';
import {BoardService} from '../shared/board.service';
import {BoardDetailComponent} from '../board-detail/board-detail.component';
import {MatDialog} from '@angular/material';
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
  displayedColumns = ['no', 'title', 'createdBy', 'createdDateTime'];
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

  private boardRowClick(row) {
    let dialogRef = this.dialog.open(BoardDetailComponent, {
      width: '600px',
      data: {boardKey: row.key}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
