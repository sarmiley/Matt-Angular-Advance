import { UtilService } from './../util.service';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(private commonService: CommonService, private utilService: UtilService) {}

  ngOnInit(): void {}
}
