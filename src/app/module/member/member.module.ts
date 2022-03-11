import { DynamicService } from './dynamic.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CommonService } from './../util/common.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';

import { MemberManageComponent } from './member-manage/member-manage.component';

import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberAccountComponent } from './member-account/member-account.component';
import { MemberMemoComponent } from './member-memo/member-memo.component';
import { ColorfulDirective } from 'src/app/common/directives/colorful.directive';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';

@NgModule({
  declarations: [
    MemberManageComponent,
    MemberListComponent,
    MemberAccountComponent,
    MemberMemoComponent,
    ColorfulDirective,
  ],
  imports: [CommonModule, SharedModule, MemberRoutingModule, MaterialModule, FormsModule],
  providers: [CommonService, DynamicService],
  entryComponents: [Tab1Component, Tab2Component],
})
export class MemberModule {}
