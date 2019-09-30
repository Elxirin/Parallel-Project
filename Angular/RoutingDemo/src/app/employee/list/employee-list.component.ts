import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  deleteEmployee(code) {
    this.employees = this.employeeService.deleteEmployee(code);
  }

  updateEmployee(code) {
    this.router.navigate(['/update',code]);
   
  }

}
