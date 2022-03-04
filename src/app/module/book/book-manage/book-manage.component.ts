import { UtilService } from './../../util/util.service';
import { CommonService } from './../../util/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.scss'],
})
export class BookManageComponent implements OnInit {
  commonTag = '';
  utilTag = '';

  constructor(private commonService: CommonService, private utilService: UtilService) {
    this.commonService.serviceTag$.subscribe((v) => (this.commonTag = v));
    this.utilService.serviceTag$.subscribe((v) => (this.utilTag = v));
  }

  ngOnInit(): void {}

  changeServiceTagContent(): void {
    this.commonService.setTag('common service has changed by BookManage');
    this.utilService.setTag('util service has changed by BookManage');
  }
}
