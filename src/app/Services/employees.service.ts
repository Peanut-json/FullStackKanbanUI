import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../Models/employee.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl : string = environment.baseAPIUrl

  constructor(private http: HttpClient) { }


  getAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees'); //*GET responce for all data within database table 
  }

  addEmployee(addEmployeeRequest:Employee):Observable<Employee>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseApiUrl + '/api/employees', addEmployeeRequest) //*POST responce for adding to databse table 
  }

  getEmployee(id:string):Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + '/api/employees/' + id) //* GET the employees for responce
  }

  updateEmpoloyee(id:string , updateEmployeeRequest: Employee):Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl + '/api/employees/' + id , updateEmployeeRequest)
  }
}
