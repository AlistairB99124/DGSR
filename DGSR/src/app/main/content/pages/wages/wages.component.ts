import { Component, OnInit, Inject } from '@angular/core';
import { countries } from 'src/app/core/data/countries';
import { employmentTypes } from 'src/app/core/data/employmentTypes';
import { designations } from 'src/app/core/data/designation';
import { ApiService } from 'src/app/core/services/api.service';
import { Employee } from 'src/app/core/models/employee.model';
import { Designation } from 'src/app/core/models/designation.enum';
import { Wage } from 'src/app/core/models/wage.model';
import { MatTableDataSource, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-wages',
  templateUrl: './wages.component.html',
  styleUrls: ['./wages.component.scss']
})
export class WagesComponent implements OnInit {

  public wages = [];
  public dataSource;

  constructor(private apiSerice: ApiService, public dialog: MatDialog) {

  }

  public ngOnInit(): void {
    this.apiSerice.getEmployees().then((employees) => {
      for (const employee of employees) {
        this.wages.push(new Wage(employee));
      }
      this.dataSource = new MatTableDataSource(this.wages);
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

  currencyFormatter = (number: Number) => {
    return `E ${number.toFixed(2).toLocaleString()}`;
  }

}

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee.modal.html',
})
export class EmployeeDetailDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EmployeeDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { employee: Employee}) {
      console.log(data);
    }

}
