import { EmploymentType } from './employment-type.enum';
import { Designation } from './designation.enum';
import { Base } from './base.model';
import { Bank } from './bank.model';

export class Employee extends Base {
  private _employeeId: string;
  private _firstName: string;
  private _lastName: string;
  private _employmentType: EmploymentType;
  private _designation: Designation;
  private _nationality: string;
  private _bank: Bank;
  private _active: boolean;
  private _paySlips: string;
  private _wage: number;

  public get wage(): number {
    return this._wage;
  }

  public set wage(v: number) {
    this._wage = v;
  }

  public get paySlips(): string {
    return this._paySlips;
  }

  public set paySlips(v: string) {
    this._paySlips = v;
  }

  public get employeeId(): string {
    return this._employeeId;
  }

  public set employeeId(v: string) {
    this._employeeId = v;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(v: string) {
    this._firstName = v;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(v: string) {
    this._lastName = v;
  }

  public get employmentType(): EmploymentType {
    return this._employmentType;
  }

  public set employmentType(v: EmploymentType) {
    this._employmentType = v;
  }

  public get designation(): Designation {
    return this._designation;
  }

  public set designation(v: Designation) {
    this._designation = v;
  }

  public get nationality(): string {
    return this._nationality;
  }

  public set nationality(v: string) {
    this._nationality = v;
  }

  public get bank(): Bank {
    return this._bank;
  }

  public set bank(v: Bank) {
    this._bank = v;
  }

  public get active(): boolean {
    return this._active;
  }

  public set active(v: boolean) {
    this._active = v;
  }

}
