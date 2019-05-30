using DGSR.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DGSR.Domain.Interfaces
{
    public interface IEmployeeDomain
    {
        Task<bool> Create(Employee employee, Bank bank);
        Task<bool> Update(Employee employee, Bank bank);
        Task<bool> Delete(Employee employee);
    }
}
