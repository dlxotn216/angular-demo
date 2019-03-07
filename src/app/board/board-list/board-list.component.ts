import {Component, OnInit} from '@angular/core';
import {BoardService} from '../shared/board.service';
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

  constructor(private boardService: BoardService) {

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
    this.boardService.getBoard(row.key)
      .subscribe(res => console.log(res));
  }
}
