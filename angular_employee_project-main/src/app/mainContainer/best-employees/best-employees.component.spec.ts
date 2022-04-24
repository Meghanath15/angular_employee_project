import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestEmployeesComponent } from './best-employees.component';

describe('BestEmployeesComponent', () => {
  let component: BestEmployeesComponent;
  let fixture: ComponentFixture<BestEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
