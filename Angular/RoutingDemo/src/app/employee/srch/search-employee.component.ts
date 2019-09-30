import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  search(data) {
    console.log(data.searchTerm);
    this.employees =  this.employeeService.getEmployees().filter( emp => emp.name.toLowerCase() === data.searchTerm.toLowerCase() );
    if(this.employees.length === 0) {
      this.employees = this.employeeService.getEmployees().filter( emp => emp.gender.toLowerCase() === data.searchTerm.toLowerCase() );
    }
  }

}
