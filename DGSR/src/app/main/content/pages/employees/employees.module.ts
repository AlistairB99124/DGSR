import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { EmployeesComponent } from './employees.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { ApiService } from 'src/app/core/services/api.service';
import { DetailEmployeeComponent } from './details/details.employee.component';
import { ListEmployeeComponent } from './list/list.employee.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EmployeesComponent,
    DetailEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
    FlexLayoutModule,
    HttpClientModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  exports: [EmployeesComponent],
  providers: [
    HttpClient,
    ApiService
  ],
})
export class EmployeesModule { }
