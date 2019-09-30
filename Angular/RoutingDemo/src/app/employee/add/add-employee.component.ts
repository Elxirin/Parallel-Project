import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('userForm',{static: false})
  public createEmployeeForm: NgForm;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(userForm){
    let employee : Employee = userForm.value;
    if(userForm.valid){
      this.employeeService.addEmployee(employee);
      this.router.navigate(['/employees']);
    }
  
  } 

}
