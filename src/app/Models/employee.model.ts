export interface Employee {
  status: number,     // our status is a number which will eventually switch to a enum or be referenced from a database
  id: string,
  name: string,
  email: string,
  phone: string      // phone numbers are not numbers pal they are a string which only contains numbers
}

export type EmployeeStatus = {
  statusId: number,
  description: string,
  employees: Employee[]
}