import { Component, Injector, OnInit } from '@angular/core';
import { DynamicService } from '../dynamic.service';
import { memberData, MemberInfo } from '../member-manage/member-manage.component';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css'],
})
export class Tab2Component implements OnInit {
  public dataIn!: MemberInfo;

  constructor(private inject: Injector, private serv: DynamicService) {}

  ngOnInit() {
    this.dataIn = this.inject.get(memberData);
  }

  sendData() {
    this.serv.outputFromDynamicComponent('Sent data from Tab2');
  }
}
