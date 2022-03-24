import { ViewService } from './../../util/view-servic';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../util/common.service';
import { UtilService } from '../../util/util.service';

// providers
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  providers: [ViewService],
})
export class BookDetailComponent implements OnInit {
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
    this.commonService.setTag('common service has changed by BookDetail');
    this.utilService.setTag('util service has changed by BookDetail');
    this.viewService.setTag('view service has changed by BookDetail');
  }
}
