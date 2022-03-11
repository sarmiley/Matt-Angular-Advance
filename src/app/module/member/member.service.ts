import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  memberList: string = 'init';
  constructor() {}

  setMemberList(memberList: string): void {
    this.memberList = memberList;
  }

  getMemberList(): string {
    return this.memberList;
  }
}
