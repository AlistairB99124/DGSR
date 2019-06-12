using DGSR.Infrastructure.ViewModels.EmployeeModule;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DGSR.Application.Interfaces
{
    public interface IEmployee
    {
        Task<bool> Create(EmployeeViewModel employee);
        Task<bool> Update(EmployeeViewModel employee);
        Task<EmployeeViewModel> Read(int id);
        Task<EmployeeViewModel[]> Read(bool? Active);
        Task<bool> Delete(int id);
    }
}
