import { ColorfulDirective } from 'src/app/common/directives/colorful.directive';
import { MemberService } from './../member.service';
import { Component, InjectionToken, Injector, OnInit, ViewChild } from '@angular/core';
import { MemberAccountComponent } from '../member-account/member-account.component';
import { Tab1Component } from '../tab1/tab1.component';
import { Tab2Component } from '../tab2/tab2.component';
import { DynamicService } from '../dynamic.service';

export const token = new InjectionToken<string>('');
@Component({
  selector: 'app-member-manage',
  templateUrl: './member-manage.component.html',
  styleUrls: ['./member-manage.component.scss'],
})
export class MemberManageComponent implements OnInit {
  memberList: string = '';
  account: string = '';
  showComponent!: MemberAccountComponent;
  @ViewChild('color') color!: ColorfulDirective;

  public activeComponent: any;
  public activeComponentData: string = '';
  public receivedData!: string;
  public myInjector!: Injector;

  constructor(private memberService: MemberService, private serv: DynamicService, private injector: Injector) {
    this.memberList = this.memberService.getMemberList();
  }

  ngOnInit(): void {
    this.serv.getObservable().subscribe((data) => {
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
      tab: 'Tab1',
      component: Tab1Component,
      data: 'This is the first Tabbbbbbbbbb',
      isActive: true,
    },
    {
      tab: 'Tab2',
      component: Tab2Component,
      data: 'This is the second tabaaaaaaaa',
      isActive: true,
    },
  ];

  setActiveTab(tabInd: number) {
    this.tabs.forEach((tab: { isActive: boolean }, tabIndex: number) => {
      tab.isActive = tabIndex === tabInd;
    });
  }

  ldTab(tabComponent: any, tabData: string, tabIndex: number) {
    setTimeout(() => {
      this.setActiveTab(tabIndex);
      this.receivedData = '';
      this.activeComponent = tabComponent;
      this.activeComponentData = tabData;
      this.createInjector();
    }, 0);
  }

  createInjector() {
    this.myInjector = Injector.create({
      providers: [{ provide: token, useValue: this.activeComponentData }],
      parent: this.injector,
    });
  }
}
