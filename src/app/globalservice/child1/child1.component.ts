import {Component} from "@angular/core";
import {CounterService} from "../shared/counter.service";
/**
 * Created by taesu on 2019-03-07.
 */

@Component({
  selector: 'app-global-service-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  count: number;
  message: string;

  constructor(private countService: CounterService) {
    this.countService.getCounter().subscribe((countDto) => {
      this.count = countDto.count;
      this.message = countDto.message;
    });
  }

  private plusCount() {
    this.countService.addCount('child1');
  }
}

