import { EmploymentType } from './employment-type.enum';
import { Designation } from './designation.enum';
import { Base } from './base.model';
import { Bank } from './bank.model';

export class Employee extends Base {
  public employeeId: string;
  public firstName: string;
  public lastName: string;
  public employmentType: EmploymentType;
  public designation: Designation;
  public nationality: string;
  public bank: Bank;
  public active: boolean;
}
