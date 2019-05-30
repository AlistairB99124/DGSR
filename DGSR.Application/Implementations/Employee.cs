using DGSR.Application.Interfaces;
using DGSR.DBService.Context;
using DGSR.Domain.Interfaces;
using DGSR.Infrastructure.ViewModels.EmployeeModule;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DGSR.Application.Implementations
{
    public class Employee : IEmployee
    {
        private readonly DGSRContext _context;
        private readonly IEmployeeDomain _domain;

        public Employee(DGSRContext dBContext, IEmployeeDomain domain)
        {
            _context = dBContext;
            _domain = domain;
        }

        public async Task<bool> Create(EmployeeViewModel employee)
        {
            var employeePoco = new DGSR.Domain.Entities.Employee
            {
                Designation = employee.Designation,
                EmployeeId = employee.EmployeeId,
                EmploymentType = employee.EmploymentType,
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                Nationality = employee.Nationality,
                Active = employee.Active
            };
            var bankPoco = new Domain.Entities.Bank
            {
                AccountNumber = employee.Bank.AccountNumber,
                Name = employee.Bank.Name,
                SortCode = employee.Bank.SortCode
            };
            return await _domain.Create(employeePoco, bankPoco);
        }

        public async Task<bool> Delete(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            return await _domain.Delete(employee);
        }

        public async Task<EmployeeViewModel> Read(int id)
        {
            try
            {
                var employee = await _context.Employees.FindAsync(id);
                return new EmployeeViewModel
                {
                    Bank = new Bank
                    {
                        AccountNumber = employee.Bank.AccountNumber,
                        Id = employee.Bank.Id,
                        Name = employee.Bank.Name,
                        SortCode = employee.Bank.SortCode
                    },
                    Designation = employee.Designation,
                    EmployeeId = employee.EmployeeId,
                    EmploymentType = employee.EmploymentType,
                    FirstName = employee.FirstName,
                    Id = employee.Id,
                    LastName = employee.LastName,
                    Nationality = employee.Nationality
                };
            }
            catch
            {
                return new EmployeeViewModel();
            }
        }

        public async Task<EmployeeViewModel[]> Read()
        {
            try
            {
                return await _context.Employees.Select(s => new EmployeeViewModel
                {

                    EmployeeId = s.EmployeeId,
                    Bank = new Bank
                    {
                        Id = s.Bank.Id,
                        AccountNumber = s.Bank.AccountNumber,
                        Name = s.Bank.Name,
                        SortCode = s.Bank.SortCode
                    },
                    Designation = s.Designation,
                    EmploymentType = s.EmploymentType,
                    FirstName = s.FirstName,
                    Id = s.Id,
                    LastName = s.LastName,
                    Nationality = s.Nationality,
                    Active = s.Active
                }).ToArrayAsync();
            }
            catch
            {
                return new List<EmployeeViewModel>().ToArray();
            }
            
        }

        public async Task<bool> Update(EmployeeViewModel employee)
        {
            var employeePoco = await _context.Employees.FindAsync(employee.Id);
            employeePoco.Designation = employee.Designation;
            employeePoco.EmployeeId = employee.EmployeeId;
            employeePoco.EmploymentType = employee.EmploymentType;
            employeePoco.FirstName = employee.FirstName;
            employeePoco.LastName = employee.LastName;
            employeePoco.Nationality = employee.Nationality;
            employeePoco.Active = employee.Active;
            var bankPoco = await _context.Banks.FindAsync(employee.Bank.Id);
            bankPoco.AccountNumber = employee.Bank.AccountNumber;
            bankPoco.Name = employee.Bank.Name;
            bankPoco.SortCode = employee.Bank.SortCode;
            return await _domain.Update(employeePoco, bankPoco);
        }
    }
}
