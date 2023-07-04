import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem } from '@angular/cdk/drag-drop';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
 

  employees: Employee[] = [];

  atWork: Employee[] = []

constructor(private employeesService: EmployeesService ) {}


  ngOnInit(): void {
    
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees) => {
  
        this.employees = employees  // *taking the value of responce and populating it into a variable.
  
        console.log(employees);
      }
      })

  }
  
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
