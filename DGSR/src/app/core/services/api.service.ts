import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiRoot = 'https://localhost:44382/api/';

  constructor (private http: HttpClient) { }

  public saveEmployee = async (employee: Employee): Promise<boolean> => {
    try {
      return this.http.post<boolean>(`${this.apiRoot}Employee/Create`, employee)
        .toPromise();
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  public getEmployees = async (): Promise<Employee[]> => {
    try {
      return this.http.post<Employee[]>(`${this.apiRoot}Employee/ReadAll`, null)
        .toPromise();
    } catch (error) {
      console.log(error);
      return [] as Employee[];
    }
  }

  public updateEmployee = async (employee: Employee): Promise<boolean> => {
    try {
      return this.http.post<boolean>(`${this.apiRoot}Employee/Update`, employee)
        .toPromise();
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
