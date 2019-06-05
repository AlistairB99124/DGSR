using DGSR.Infrastructure.ViewModels.EmployeeModule;
using System;

namespace DGSR.Infrastructure.ViewModels.PaySlips
{
    public class PaySlipViewModel
    {
        public int Id { get; set; }
        public decimal HoursLeave { get; set; }
        public decimal HoursNormal { get; set; }
        public decimal HoursOneThird { get; set; }
        public decimal HoursOneHalf { get; set; }
        public decimal HoursDouble { get; set; }
        public decimal HoursEffective { get; set; }
        public decimal GrossPay { get; set; }
        public decimal PAYE { get; set; }
        public decimal SNPF { get; set; }
        public decimal NetPay { get; set; }
        public decimal RelocationAllowance { get; set; }
        public decimal LoanRepay { get; set; }
        public decimal AmountPaid { get; set; }
        public DateTime DateCreated { get; set; }
        public int EmployeeId { get; set; }
        public EmployeeViewModel Employee { get; set; }
    }
}
