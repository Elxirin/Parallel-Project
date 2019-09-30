import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import  { ActivatedRoute, Router } from '@angular/router' ;


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: Employee;
  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let code: string = this.activatedRoute.snapshot.params["id"];
    this.employee = this.employeeService.getEmployees().find( emp => emp.code === code);
  }


  navigate(path:string) {
    if(path==='back'){
      this.router.navigate(["/employees"]);
    }  
    if(path==='home'){
      this.router.navigate(["/home"])  ;    
    }
    
  }
}
