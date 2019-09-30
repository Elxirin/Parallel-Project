import { Injectable } from '@angular/core';
import { CanDeactivate } from '../../../../node_modules/@angular/router';
import { AddEmployeeComponent } from '../add/add-employee.component';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeCanDeactivateRouteGuardService implements CanDeactivate<AddEmployeeComponent> {
  canDeactivate(component: AddEmployeeComponent ): boolean {
    if (component.createEmployeeForm.dirty) {
      return confirm("Are you sure you want Move(y/n)?");
    }
    return true;
  }
    constructor() { }
}
