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

import { MaterialModule } from 'src/app/core/material/material.module';
import { ApiService } from 'src/app/core/services/api.service';
import { WagesComponent, EmployeeDetailDialogComponent } from './wages.component';
import { MatInputModule, MatButtonModule } from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    WagesComponent,
    EmployeeDetailDialogComponent
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
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressBarModule
  ],
  exports: [WagesComponent],
  providers: [
    HttpClient,
    ApiService
  ],
  entryComponents: [
    EmployeeDetailDialogComponent
  ]
})
export class WagesModule { }
