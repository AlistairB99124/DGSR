using DGSR.Infrastructure.ViewModels.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DGSR.Domain.Entities
{
    public class Employee
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Display(Name = "Id")]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        [Display(Name = "Employee Id")]
        public string EmployeeId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        [Required]
        [Column(TypeName = "int")]
        [Display(Name = "Employment Type")]
        public EmploymentType EmploymentType { get; set; }
        [Required]
        [Column(TypeName = "int")]
        [Display(Name = "Designation")]
        public Designation Designation { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        [Display(Name = "Nationality")]
        public string Nationality { get; set; }
        public virtual Bank Bank { get; set; }
        [Required]
        [Column(TypeName = "bit")]
        [Display(Name = "Active")]
        public bool Active { get; set; }
    }
}
