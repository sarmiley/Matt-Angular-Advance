import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../../common/base/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemberService extends BaseService {
  memberList: string = 'init';
  constructor(http: HttpClient) {
    super(http);
  }

  getMemberList(): Observable<any> {
    console.log('call gerMemberList service');
    return this.get('api/memberList');
  }

  setMemberList(memberList: string): void {
    this.memberList = memberList;
  }
}
