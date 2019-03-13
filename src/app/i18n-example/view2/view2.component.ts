import {Component, OnInit} from '@angular/core';
import {LabelService} from '../shared/label.service';
import {LocaleService} from '../shared/locale.service';
/**
 * Created by taesu on 2019-03-07.
 */


interface FormLabel {
  userId: string;
  password: string;
  email: string;
}

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  private locale: string;
  private formLabel: FormLabel;

  constructor(private labelService: LabelService,
              private localeService: LocaleService) {
  }

  ngOnInit(): void {
    this.localeService.getLocalePublisher().subscribe(locale => {
      this.locale = locale;
      this.labelService.getLabels(locale)
        .subscribe(res => {
          this.formLabel = Object.assign(res.result);
        });
    });

    this.localeService.sync();
  }


}
