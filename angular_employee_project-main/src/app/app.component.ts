import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from './mainContainer/employees.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee';
  ob:Observable<number>;

  constructor(){
  }
}
