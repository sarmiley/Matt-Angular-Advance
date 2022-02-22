import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';

import { MemberManageComponent } from './member-manage/member-manage.component';

import { ShareModule } from 'src/app/shared/shared/shared.module';




@NgModule({
  declarations: [
    MemberManageComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
