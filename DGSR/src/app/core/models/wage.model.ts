import { PaySlip } from './paySlip.model';
import { EmploymentType } from './employment-type.enum';
import * as _ from 'lodash';
import { Employee } from './employee.model';
const SNPF_CEILING = 2700;
const SNPF_RATE = 0.05;
const SNPF_CEILING_RATE = 135;
const REBATE = 8200;

export class Wage extends PaySlip {

  constructor (employee: Employee) {
    super();
    this.employee = employee;
  }

  private _loan = 0;
  private _gTax = 0;
  private _advance = 0;
  private _bonus = 0;

  public get grossAmount(): number {
    if (this.employee.employmentType === EmploymentType.Wage) {
      return this.employee.wage * this.hoursEffective;
    } else {
      return this.employee.wage;
    }
  }

  public get bonus(): number {
    if (this._bonus) {
      return this._bonus;
    } else {
      return 0;
    }
  }

  public set bonus(v: number) {
    this._bonus = v;
  }

  public get snpf(): number {
    if (this.employee.nationality === 'Swaziland') {
      if ((this.grossAmount + this.bonus) > SNPF_CEILING) {
        return SNPF_CEILING_RATE;
      } else {
        return _.floor((this.grossAmount + this.bonus) * SNPF_RATE, 0);
      }
    } else {
      return 0;
    }
  }


  public get amountTaxable(): number {
    return this.grossAmount - this.snpf;
  }

  public get pAYE(): number {
    const annualTaxable = this.amountTaxable * 12;
    if (annualTaxable < 100000) {
      if (annualTaxable > REBATE) {
        return (0.2 * (annualTaxable - REBATE)) / 12;
      } else {
        return 0;
      }
    } else if (annualTaxable >= 100000 && annualTaxable < 150000) {
      return (20000 + 0.25 * (annualTaxable - 100000)) / 12;
    } else if (annualTaxable >= 150000 && annualTaxable < 200000) {
      return (32500 + 0.30 * (annualTaxable - 150000)) / 12;
    } else {
      return (47500 + 0.33 * (annualTaxable - 200000)) / 12;
    }
  }

  public get employerPAYE(): number {
    return this.pAYE;
  }


  public get loan(): number {
    return this._loan;
  }

  public set loan(v: number) {
    this._loan = v;
  }

  public get advance(): number {
    return this._advance;
  }

  public set advance(v: number) {
    this._advance = v;
  }

  public get amountPaid(): number {
    return this.grossAmount + this._bonus - this._gTax - this.pAYE - this._loan + this._advance;
  }

  public get gTax(): number {
    return this._gTax;
  }

  public set gTax(v: number) {
    this._gTax = v;
  }

}
