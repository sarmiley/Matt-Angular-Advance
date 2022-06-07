import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegFormGroupComponent } from './reg-form-group.component';

describe('RegFormGroupComponent', () => {
  let component: RegFormGroupComponent;
  let fixture: ComponentFixture<RegFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
