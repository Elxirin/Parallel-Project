import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    emp: Employee;

    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    let code: string = this.activatedRoute.snapshot.params["id"];

    this.emp = this.employeeService.updateEmployee(code);
    this.code = this.emp.code;
    this.name = this.emp.name;
    this.gender = this.emp.gender;
    this.annualSalary = this.emp.annualSalary;
    this.dateOfBirth = this.emp.dateOfBirth;
  }

  onSubmit(employee: Employee) {
    this.employeeService.updateEmployeeAdd(employee,this.emp.code);
    this.router.navigate(['/employees']);
  }


}
