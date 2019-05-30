import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { countries } from 'src/app/core/data/countries';
import { employmentTypes } from 'src/app/core/data/employmentTypes';
import { designations } from 'src/app/core/data/designation';
import { ApiService } from 'src/app/core/services/api.service';
import { Employee } from 'src/app/core/models/employee.model';
import { Designation } from 'src/app/core/models/designation.enum';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  public selectedEmployee: Employee;
  public type: 'list' | 'detail';

  constructor() {

  }

  public ngOnInit(): void {
    this.type = 'list';
  }

  public setEmployee = (employee: Employee) => {
    this.selectedEmployee = employee;
    this.type = 'detail';
  }

  public saveEmployee = () => {
    this.selectedEmployee = undefined;
    this.type = 'list';
  }

  public addEmployee = () => {
    this.selectedEmployee = undefined;
    this.type = 'detail';
  }

  public cancel = () => {
    this.selectedEmployee = undefined;
    this.type = 'list';
  }

}
