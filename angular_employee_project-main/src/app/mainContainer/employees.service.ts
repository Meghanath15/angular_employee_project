import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmployeeType } from './type/employee.type';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly baseUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) {}

  public fetchAll(): Observable<EmployeeType[]> {
    return this.http.get<EmployeeType[]>(this.baseUrl)
  }

  
}