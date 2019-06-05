import { Employee } from './employee.model';
import { Base } from './base.model';

export class PaySlip extends Base {
  public hoursLeave = 0;
  public hoursNormal = 0;
  public hoursOneThird = 0;
  public hoursOneHalf = 0;
  public hoursDouble = 0;

  public get hoursEffective(): number {
    const hoursNormal = this.hoursNormal ? this.hoursNormal : 0;
    const hoursOneThird = this.hoursOneThird ? this.hoursOneThird * (1 + (1 / 3)) : 0;
    const hoursOneHalf = this.hoursOneHalf ?  this.hoursOneHalf * 1.5 : 0;
    const hoursDouble = this.hoursDouble ? this.hoursDouble * 2 : 0;
    const hoursLeave = this.hoursLeave;
    return hoursDouble + hoursOneHalf + hoursOneThird + hoursNormal + hoursLeave;
  }

  public grossPay: number;
  public pAYE: number;
  public sNPF: number;
  public netPay: number;
  public relocationAllowance: number;
  public loanRepay: number;
  public amountPaid: number;
  public dateCreated: Date;
  public employeeId: number;
  public employee: Employee;
}
