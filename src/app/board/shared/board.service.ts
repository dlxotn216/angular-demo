/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable()
export class BoardService {
  constructor(private http: HttpClient) {
  }

  public getBoards(param: any): Observable<any> {
    const queryString = Object.keys(param)
      .map(key => {
        return `${key}=${param[key]}`;
      }).join('&');

    if (queryString) {
      return this.http.get<any>('http://localhost:8080/boards?' + queryString);
    } else {
      return this.http.get<any>('http://localhost:8080/boards');
    }
  }

  public addBoard(board: BoardDto): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/boards`, board);
  }
  public getBoard(boardKey: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/boards/${boardKey}`);
  }

  public updateBoard(board: BoardDto): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/boards/${board.boardKey}`, board);
  }

  public deleteBoard(boardKey: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/boards/${boardKey}`);
  }

}
