import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberManageComponent } from './member-manage/member-manage.component';

const routes: Routes = [
  { 
    path: 'manage', 
    component: MemberManageComponent 
  },
  { 
    path: '', 
    component: MemberManageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
