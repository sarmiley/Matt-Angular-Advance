import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
})
export class MemberListComponent implements OnInit {
  @Input() memberList!: string;
  @Output() memberListChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
