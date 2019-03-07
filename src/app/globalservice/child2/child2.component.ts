import {Component} from "@angular/core";
import {CounterService} from "../shared/counter.service";
/**
 * Created by taesu on 2019-03-07.
 */

@Component({
  selector: 'app-global-service-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  count: number;
  message: string;

  constructor(private countService: CounterService) {
    this.countService.getCounter().subscribe((countDto) => {
      this.count = countDto.count;
      this.message = countDto.message;
    });
  }

  private plusCount() {
    this.countService.addCount('child2');
  }
}
