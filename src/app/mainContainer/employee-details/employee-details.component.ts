import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeType } from '../type/employee.type';
import { MainEmployeeService } from '../mainEmployee.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employee: EmployeeType;
  constructor(private route: ActivatedRoute, private empService: MainEmployeeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const empId=params.id;
      this.employee=this.empService.getEmployeeDetailsById(+empId);
    })
  }

}
