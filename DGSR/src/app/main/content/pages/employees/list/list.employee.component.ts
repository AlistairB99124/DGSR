import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { countries } from 'src/app/core/data/countries';
import { employmentTypes } from 'src/app/core/data/employmentTypes';
import { designations } from 'src/app/core/data/designation';
import { ApiService } from 'src/app/core/services/api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import { Employee } from 'src/app/core/models/employee.model';
import { Designation } from 'src/app/core/models/designation.enum';
import { EmploymentType } from 'src/app/core/models/employment-type.enum';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list.employee.component.html',
  styleUrls: ['./list.employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  @Output() public setEmployee = new EventEmitter<Employee>();

  public dataSource;

  public designation = Designation;
  public employmentType = EmploymentType;

  constructor(private apiService: ApiService) {

  }

  public ngOnInit(): void {
    this.apiService.getEmployees().then((response) => {
      this.dataSource = new MatTableDataSource(response);
    });
  }

  public editEmployee = (employee: Employee): void => {
    this.setEmployee.emit(employee);
  }

  public formatEnums = (label: string) => {
    return label.split(/(?=[A-Z])/).join(' ');
  }

  public updateActive = async (employee: Employee) => {
    await this.apiService.updateEmployee(employee);
  }

}
