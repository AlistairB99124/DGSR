import { Component, OnInit, Inject } from '@angular/core';
import { countries } from 'src/app/core/data/countries';
import { employmentTypes } from 'src/app/core/data/employmentTypes';
import { designations } from 'src/app/core/data/designation';
import { ApiService } from 'src/app/core/services/api.service';
import { Employee } from 'src/app/core/models/employee.model';
import { Designation } from 'src/app/core/models/designation.enum';
import { Wage } from 'src/app/core/models/wage.model';
import { MatTableDataSource, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { timeout } from 'q';

@Component({
  selector: 'app-wages',
  templateUrl: './wages.component.html',
  styleUrls: ['./wages.component.scss']
})
export class WagesComponent implements OnInit {
  public wages = [];
  public dataSource;
  public loading = true;

  constructor(private apiSerice: ApiService, public dialog: MatDialog) {

  }

  public ngOnInit(): void {
    this.apiSerice.getEmployees(true).then((employees) => {
      for (const employee of employees) {
        this.wages.push(new Wage(employee));
      }
      this.dataSource = new MatTableDataSource(this.wages);
      this.loading = false;
    });
  }

  public showEmployee = (employee: Employee) => {
    const dialogRef = this.dialog.open(EmployeeDetailDialogComponent, {
      data: {
        employee: employee
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  private numberWithCommas(val: number) {
    const parts = val.toFixed(2).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '\'');
    return parts.join('.');
  }

  public currencyFormatter = (number: number) => {
    return `E ${this.numberWithCommas(number)}`;
  }

  /** Process wages and send payslips to mommy :)
   */
  public generatePaySlips = () => {
    console.table(this.dataSource.data);
  }

}

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee.modal.html',
})
export class EmployeeDetailDialogComponent {

  public employeeFields = [];
  public propMap = {
    id: 'ID',
    employeeId: 'Employee ID',
    firstName: 'First Name',
    lastName: 'Last Name',
    employmentType: 'Employee Type',
    designation: 'Designation',
    nationality: 'Nationality',
    bank: 'Bank',
    active: 'Active',
    wage: 'Wage'
  };

  public empMap = {
    1000: 'Salary',
    1001: 'Wage'
  };

  public desigMap = {
    10000: 'Site Manager',
    10001: 'Administrator',
    10002: 'Mason',
    10003: 'Assistant Manager',
    10004: 'Mixer Operator',
    10005: 'Assistant Mason',
    10006: 'General Hand',
    10007: 'Clerk',
    10008: 'Charge Hand',
    10009: 'Operator',
    10010: 'Tractor Driver',
    10011: 'Contract'
  };

  constructor(
    public dialogRef: MatDialogRef<EmployeeDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { employee: Employee}) {
      console.log(data);
      // tslint:disable-next-line:forin
      for (const prop in data.employee) {
        let row;
        if (prop === 'employmentType') {
          row = {
            field: this.empMap[data.employee[prop]],
            name: this.propMap[prop]
          };
        } else if (prop === 'designation') {
          row = {
            field: this.desigMap[data.employee[prop]],
            name: this.propMap[prop]
          };
        } else if (prop === 'bank') {

          row = {
            field: data.employee[0][prop],
            name: this.propMap[prop]
          };
        } else {
          row = {
            field: data.employee[prop],
            name: this.propMap[prop]
          };
        }
        this.employeeFields.push(row);
      }
    }

}
