import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../util/common.service';
import { UtilService } from '../../util/util.service';

@Component({
  selector: 'app-member-manage',
  templateUrl: './member-manage.component.html',
  styleUrls: ['./member-manage.component.scss'],
})
export class MemberManageComponent implements OnInit {
  commonTag = '';
  utilTag = '';

  constructor(private commonService: CommonService, private utilService: UtilService) {
    this.commonService.serviceTag$.subscribe((v) => (this.commonTag = v));
    this.utilService.serviceTag$.subscribe((v) => (this.utilTag = v));
  }

  ngOnInit(): void {}

  changeServiceTagContent(): void {
    this.commonService.setTag('common service has changed by MemberManage');
    this.utilService.setTag('util service has changed by MemberManage');
  }
}