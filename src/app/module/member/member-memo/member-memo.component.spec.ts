import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMemoComponent } from './member-memo.component';

describe('MemberMemoComponent', () => {
  let component: MemberMemoComponent;
  let fixture: ComponentFixture<MemberMemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberMemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
