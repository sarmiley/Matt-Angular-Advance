import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-account',
  templateUrl: './member-account.component.html',
  styleUrls: ['./member-account.component.scss'],
})
export class MemberAccountComponent implements OnInit {
  @Input() account!: string;

  constructor() {}

  ngOnInit(): void {}
}
