import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachEmployeeComponent } from './each-employee.component';

describe('EachEmployeeComponent', () => {
  let component: EachEmployeeComponent;
  let fixture: ComponentFixture<EachEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
