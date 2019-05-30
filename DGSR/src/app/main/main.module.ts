import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../core/material/material.module';
import { ContentComponent } from './content/content.component';
import { EmployeesModule } from './content/pages/employees/employees.module';

@NgModule({
  declarations: [MainComponent, ContentComponent],
  imports: [AppRoutingModule, MaterialModule, EmployeesModule],
  exports: [MainComponent]
})
export class MainModule { }
