import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Employee, EmployeeStatus } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  employees: EmployeeStatus[] = [{
    description: "Employees",
    employees: [{
      email: "test",
      id: "jdfksaljdksalj",
      name: "dave",
      phone: "80",
      status: 0
    }],
    statusId: 0
  },
  {
    description: "At Work",
    employees: [],
    statusId: 1
  },
  {
    description: "Skiving",
    employees: [],
    statusId: 2
  }]


  constructor(private employeesService: EmployeesService) { }


  ngOnInit(): void {

    this.employeesService.getAllEmployees()
      .subscribe({
        next: (employees) => {

          // Dean you will want to split these into the collections defined above based on the value of status
          this.employees[0].employees = employees  // *taking the value of responce and populating it into a variable.

          console.log(employees);
        }
      })

  }

  drop(event: CdkDragDrop<EmployeeStatus, EmployeeStatus, Employee>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data.employees, event.previousIndex, event.currentIndex);
    } else {
      
      // Here is how you get the employee
      let employeeId = event.item.data.id;

      // And the Status ID
      let statusId = event.container.data.statusId;

      transferArrayItem(
        event.previousContainer.data.employees,
        event.container.data.employees,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
