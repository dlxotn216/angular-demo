import {Component, OnInit} from '@angular/core';
import {LabelService} from '../shared/label.service';
import {LocaleService} from '../shared/locale.service';
/**
 * Created by taesu on 2019-03-07.
 */


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  private locale: string;

  constructor(private labelService: LabelService,
              private localeService: LocaleService) {
  }

  ngOnInit(): void {
    this.localeService.getLocalePublisher().subscribe(locale => {
      this.locale = locale;
    });

    this.localeService.sync();
  }


}
