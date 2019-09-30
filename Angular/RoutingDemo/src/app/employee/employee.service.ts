import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  employees: Employee[] ;
  emp: Employee;
    
  constructor(private http: HttpClient) {
     this.populateEmployees().subscribe( data => this.employees = data, error => console.log(error) );
   }

  populateEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>("../../assets/employees.json");
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  deleteEmployee(code): Employee[] {
    return this.employees = this.employees.filter( emp => emp.code !== code );
  }

  updateEmployee(code): Employee {
    this.emp = this.employees.find(e=>e.code===code);
    return this.emp;
  }

  updateEmployeeAdd(empl: Employee, code) {
    let i = this.employees.findIndex(e => e.code === code);
    console.log(this.employees[i]);
    console.log(empl);
    this.employees[i].code = empl.code;
    this.employees[i].name = empl.name;
    this.employees[i].gender = empl.gender;
    this.employees[i].annualSalary = empl.annualSalary;
    this.employees[i].dateOfBirth = empl.dateOfBirth;
    
  }
}
