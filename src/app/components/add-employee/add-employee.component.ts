import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {


  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: '0',
    status: 0
  }

  constructor(private employeeService: EmployeesService, private router: Router) { }



  ngOnInit(): void {

  }

  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest)
      .subscribe({
        next: (employee) => {
          this.router.navigate(['employees']) //* using this and also the constructor of routor to when used will route back to the main page
        }
      });
  }


}
