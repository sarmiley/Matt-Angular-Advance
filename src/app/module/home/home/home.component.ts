import { ViewService } from './../../util/view-servic';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../util/common.service';
import { UtilService } from '../../util/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  commonTag = '';
  utilTag = '';
  viewTag = '';
  fontSizeWithUnits = '30';
  fontColorWithUnits = 'gray';

  constructor(
    private commonService: CommonService,
    private utilService: UtilService,
    private viewService: ViewService
  ) {
    this.commonService.serviceTag$.subscribe((v) => (this.commonTag = v));
    this.utilService.serviceTag$.subscribe((v) => (this.utilTag = v));
    this.viewService.serviceTag$.subscribe((v) => (this.viewTag = v));
  }

  ngOnInit(): void {}

  changeServiceTagContent(): void {
    this.commonService.setTag('common service has changed by Home');
    this.utilService.setTag('util service has changed by Home');
    this.viewService.setTag('view service has changed by Home');
  }

  getColor() {
    return 'text-blue';
  }

  getSize() {
    return 'text-big-size';
  }

  getContent() {
    return '<h1>this is home content</h1>';
  }
}
