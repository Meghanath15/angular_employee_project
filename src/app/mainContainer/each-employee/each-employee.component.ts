import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { EmployeeType } from '../type/employee.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-each-employee',
  templateUrl: './each-employee.component.html',
  styleUrls: ['./each-employee.component.css']
})
export class EachEmployeeComponent implements OnInit {
  @Input() public emp:EmployeeType;
  @Input() public first :boolean;
  @Input() public last: boolean;
  @Input() public index: number;
  @Output() public empDelete: EventEmitter<number>=new EventEmitter();
  @Output() public empAdd: EventEmitter<EmployeeType>=new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  handleDelete() {
    this.empDelete.emit(this.emp.id);
  }

  handleAdd(){
    this.empAdd.emit (this.emp);
  }

  handleExpand(){
    this.router.navigateByUrl(`/employees/${this.emp.id}`,{})
  }

}
