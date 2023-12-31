import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');
  }
  
  addEmployee(addEmployeeRequest: Employee) {
    addEmployeeRequest.id = 'AD4E3661-1D2E-4963-8030-4764863E3CFF'
    return this.http.post<Employee>(this.baseApiUrl + '/api/employees', addEmployeeRequest)
  }
}
