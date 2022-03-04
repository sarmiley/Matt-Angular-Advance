import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSecViewComponent } from './test-sec-view.component';

describe('TestSecViewComponent', () => {
  let component: TestSecViewComponent;
  let fixture: ComponentFixture<TestSecViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSecViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSecViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
