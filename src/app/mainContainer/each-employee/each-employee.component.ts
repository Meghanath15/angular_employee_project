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
  @Output() public postDelete: EventEmitter<number>=new EventEmitter();
  @Output() public postAdd: EventEmitter<number>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  handleDelete() {
    this.postDelete.emit(this.emp.id);
  }

  handleAdd(){
    this.postAdd.emit (this.emp)
  }

}
