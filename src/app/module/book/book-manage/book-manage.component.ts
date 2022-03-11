import { ViewService } from '../../util/view-servic';
import { UtilService } from './../../util/util.service';
import { CommonService } from './../../util/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.scss'],
  providers: [ViewService],
})
export class BookManageComponent implements OnInit {
  commonTag = '';
  utilTag = '';
  viewTag = '';

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
    this.commonService.setTag('common service has changed by BookManage');
    this.utilService.setTag('util service has changed by BookManage');
    this.viewService.setTag('view service has changed by BookManage');
  }
}
