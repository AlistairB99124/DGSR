import { Base } from './base.model';
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export class Bank extends Base {
    public name: string;
    public accountNumber: string;
    public sortCode: string;

    public get reference(): string {
        return `${MONTHS[new Date().getMonth()].toUpperCase()} ${new Date().getFullYear()}`;
    }
}
