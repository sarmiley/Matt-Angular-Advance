import { BehaviorSubject } from 'rxjs';
import { MessageService } from './../../../common/message/message.service';
import { ColorfulDirective } from 'src/app/common/directives/colorful.directive';
import { MemberService } from './../member.service';
import { Component, InjectionToken, Injector, OnInit, ViewChild } from '@angular/core';
import { MemberAccountComponent } from '../member-account/member-account.component';
import { Tab1Component } from '../tab1/tab1.component';
import { Tab2Component } from '../tab2/tab2.component';
import { DynamicService } from '../dynamic.service';

export const memberData = new InjectionToken<MemberInfo>('');
export type MemberInfo = { name: string; gender: string };
@Component({
  selector: 'app-member-manage',
  templateUrl: './member-manage.component.html',
  styleUrls: ['./member-manage.component.scss'],
})
export class MemberManageComponent implements OnInit {
  memberList: string = '';
  account: string = '';
  showComponent!: MemberAccountComponent;
  messages: string[] = [];
  @ViewChild('color') color!: ColorfulDirective;

  public activeComponent: any;
  public activeComponentData: string = '';
  public receivedData!: string;
  public myInjector!: Injector;

  constructor(private memberService: MemberService, private serv: DynamicService, private injector: Injector) {
    this.memberService.getMemberList().subscribe((res) => {
      this.memberService.setMemberList(res);
    });
  }

  ngOnInit(): void {
    this.serv.getObservable().subscribe((data) => {
      console.log('data is change: ', data);
      this.receivedData = data;
    });
    this.ldTab(this.tabs[0].component, this.tabs[0].data, 0);
  }

  changeColor(color: string): void {
    this.color.changeColor(color);
  }

  getAccount() {
    return MemberAccountComponent;
  }

  public tabs: any = [
    {
      tab: 'Mark',
      component: Tab1Component,
      data: { name: 'Mark', gender: 'male' },
      isActive: true,
    },
    {
      tab: 'Maria',
      component: Tab2Component,
      data: { name: 'Maria', gender: 'female' },
      isActive: true,
    },
  ];

  setActiveTab(tabInd: number) {
    this.tabs.forEach((tab: { isActive: boolean }, tabIndex: number) => {
      tab.isActive = tabIndex === tabInd;
    });
  }

  ldTab(tabComponent: any, tabData: string, tabIndex: number) {
    this.setActiveTab(tabIndex);
    this.activeComponent = tabComponent;
    this.activeComponentData = tabData;
    this.createInjector();
  }

  createInjector() {
    // 注意，injector的providers中，useValue並無嚴謹的型別檢測，所以要特別注意型別對應問題
    this.myInjector = Injector.create({
      providers: [{ provide: memberData, useValue: this.activeComponentData }],
      parent: this.injector,
    });
  }
}
