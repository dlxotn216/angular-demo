/**
 * @author Lee Tae Su
 * @project angular-demo
 * @version 1.0
 * @since 2019-03-07
 */
interface BoardDto {
  boardKey: number;
  no: number;
  title: string;
  content?: string;
  createdBy: string;
  createdDateTime: string;
}
