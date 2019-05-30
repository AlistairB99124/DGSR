using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DGSR.Domain.Entities
{
    public class Bank
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Display(Name = "Bank Id")]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        [Display(Name = "Bank Name")]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        [Display(Name = "Account Number")]
        public string AccountNumber { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(15)")]
        [Display(Name = "Sort Code")]
        public string SortCode { get; set; }
        [Required]
        [Column(TypeName = "int")]
        [Display(Name = "Employee ID")]
        [ForeignKey("Employee")]
        public int EmployeeId { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
