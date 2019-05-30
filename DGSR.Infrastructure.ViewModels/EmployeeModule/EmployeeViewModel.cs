using DGSR.Infrastructure.ViewModels.Enums;

namespace DGSR.Infrastructure.ViewModels.EmployeeModule
{
    public class EmployeeViewModel
    {
        public int Id { get; set; }
        public string EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public EmploymentType EmploymentType { get; set; }
        public Designation Designation { get; set; }
        public string Nationality { get; set; }
        public Bank Bank { get; set; }
        public bool Active { get; set; }
    }
}
