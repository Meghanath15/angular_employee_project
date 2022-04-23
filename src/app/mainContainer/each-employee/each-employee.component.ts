import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { EmployeeType } from '../type/employee.type';
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
  @Input() public postDelete: EventEmitter<number>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  handleDelete() {
    this.postDelete.emit(this.emp.id);
  }

}