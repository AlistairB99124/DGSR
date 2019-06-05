using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DGSR.Domain.Entities
{
    public class PaySlip
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Display(Name = "PaySlip Id")]
        public int Id { get; set; }
        [Column(TypeName = "decimal(8)")]
        [Display(Name = "Hours Leave")]
        public decimal HoursLeave { get; set; }
        [Column(TypeName = "decimal(8)")]
        [Display(Name = "Hours Normal")]
        public decimal HoursNormal { get; set; }
        [Column(TypeName = "decimal(8)")]
        [Display(Name = "HoursOneThird")]
        public decimal HoursOneThird { get; set; }
        [Column(TypeName = "decimal(8)")]
        [Display(Name = "Hours 1/3")]
        public decimal HoursOneHalf { get; set; }
        [Column(TypeName = "decimal(8)")]
        [Display(Name = "Hours 1/2")]
        public decimal HoursDouble { get; set; }
        [Column(TypeName = "decimal(8)")]
        [Display(Name = "Hours Effective")]
        public decimal HoursEffective { get; set; }
        [Column(TypeName = "decimal(8)")]
        [Display(Name = "Gross Pay")]
        public decimal GrossPay { get; set; }
        [Column(TypeName = "decimal(8)")]
        [Display(Name = "PAYE")]
        public decimal PAYE { get; set; }
        [Column(TypeName = "decimal(8)")]
        [Display(Name = "SNPF")]
        public decimal SNPF { get; set; }
        [Column(TypeName = "decimal(8)")]
        [Display(Name = "Net Pay")]
        public decimal NetPay { get; set; }
        [Column(TypeName = "decimal(8)")]
        [Display(Name = "Relocation Allowance")]
        public decimal RelocationAllowance { get; set; }
        [Column(TypeName = "decimal(8)")]
        [Display(Name = "Loan Repay")]
        public decimal LoanRepay { get; set; }
        [Column(TypeName = "decimal(8)")]
        [Display(Name = "Amount Paid")]
        public decimal AmountPaid { get; set; }
        [Column(TypeName = "DateTime")]
        [Display(Name = "Date Created")]
        public DateTime DateCreated { get; set; }
        [Required]
        [Column(TypeName = "int")]
        [Display(Name = "Employee ID")]
        [ForeignKey("Employee")]
        public int EmployeeId { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
