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

  constructor(private commonService: CommonService, private utilService: UtilService) {
    this.commonService.serviceTag$.subscribe((v) => (this.commonTag = v));
    this.utilService.serviceTag$.subscribe((v) => (this.utilTag = v));
  }

  ngOnInit(): void {}
}
