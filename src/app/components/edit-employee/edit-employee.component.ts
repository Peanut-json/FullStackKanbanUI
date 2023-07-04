import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

employeeDetails: Employee = {

  id: '',
  name: '',
  email: '',
  phone: 0

}


constructor(private route:ActivatedRoute , private employeeService: EmployeesService , private router: Router) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {  //* this will call the API 

          this.employeeService.getEmployee(id)
          .subscribe({
            next: (responce) => {
              this.employeeDetails = responce;
            }
          })
        }
      }
    })
  }

  updateEmployee(){
    this.employeeService.updateEmpoloyee(this.employeeDetails.id ,this.employeeDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['employees'])
      }
    })
  }
}
