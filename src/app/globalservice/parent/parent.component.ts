import {Component, OnInit} from "@angular/core";
import {CounterService} from "../shared/counter.service";
/**
 * Created by taesu on 2019-03-07.
 */

@Component({
  selector: 'app-global-service-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  count: number;

  message: string;

  constructor(private countService: CounterService) {
  }

  ngOnInit(): void {
    this.countService.getCounter().subscribe((countDto) => {
      this.count = countDto.count;
      this.message = countDto.message;
    });

    this.countService.sync('parent');
  }

  private plusCount() {
    this.countService.addCount('parent');
  }
}
