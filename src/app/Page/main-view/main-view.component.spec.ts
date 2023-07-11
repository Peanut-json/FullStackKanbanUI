import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewComponent } from './main-view.component';
import { EmployeeStatus } from 'src/app/Models/employee.model';

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainViewComponent]
    });
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe("SplitEmployees", () => {

  it("should group employees", () => {
    // Arrange
    let employees: Pick<Employee, "status">[] = [
      { status: 1 },
      { status: 2 },
      { status: 1 },
      { status: 0 }
    ];

    let statuses: (Pick<EmployeeStatus, "statusId"> & { employees: { status: number }[] })[] = [{
      statusId: 0,
      employees: []
    },
    {
      statusId: 1,
      employees: []
    },
    {
      statusId: 2,
      employees: []
    }];

    // Act
    splitEmployees(employees, statuses);

    // Assert
    expect(statuses[0].employees).toEqual([{ status: 0 }])
    expect(statuses[1].employees).toEqual([{ status: 1 }, { status: 1 }])
    expect(statuses[2].employees).toEqual([{ status: 2 }])

  })
})
