import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { countries } from 'src/app/core/data/countries';
import { employmentTypes } from 'src/app/core/data/employmentTypes';
import { designations } from 'src/app/core/data/designation';
import { ApiService } from 'src/app/core/services/api.service';
import { Employee } from 'src/app/core/models/employee.model';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './details.employee.component.html',
  styleUrls: ['./details.employee.component.scss']
})
export class DetailEmployeeComponent implements OnInit {

  @Input() public employee: Employee;
  @Output() public save = new EventEmitter<void>();

  public employeeAddForm: FormGroup;
  public bankAddForm: FormGroup;
  public countries = countries;
  public employmentTypes = employmentTypes;
  public designations = designations;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {

  }

  public ngOnInit() {
    this.employeeAddForm = this.formBuilder.group({
      id: [0],
      employeeId: [],
      firstName: ['', []],
      lastName: ['', []],
      employmentType: [10001],
      designation: [null],
      nationality: [],
      active: [true],
      wage: [0]
    });
    this.bankAddForm = this.formBuilder.group({
      id: [0],
      name: [''],
      accountNumber: [''],
      sortCode: ['']
    });
    if (!this.employee) {
      this.employee = new Employee();
    } else {
      this.employeeAddForm.setValue({
        id: this.employee.id,
        employeeId: this.employee.employeeId,
        firstName: this.employee.firstName,
        lastName: this.employee.lastName,
        employmentType: this.employee.employmentType,
        designation: this.employee.designation,
        nationality: this.employee.nationality,
        active: this.employee.active,
        wage: this.employee.wage
      });
      this.bankAddForm.setValue({
        id: this.employee.bank.id,
        name: this.employee.bank.name,
        accountNumber: this.employee.bank.accountNumber,
        sortCode: this.employee.bank.sortCode
      });
    }
  }

  public saveNewEmployee = async () => {
    const employee = this.employeeAddForm.value as Employee;
    employee.bank = this.bankAddForm.value;
    let result;
    if (employee.id) {
      result = await this.apiService.updateEmployee(employee);
    } else {
      result = await this.apiService.saveEmployee(employee);
    }
    if (result) {
      this.bankAddForm.reset();
      this.employeeAddForm.reset();
      this.save.emit();
    } else {
      alert('An API error occured');
    }
  }

}
