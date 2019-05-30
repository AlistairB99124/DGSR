using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DGSR.DBService.Context;
using DGSR.Domain.Entities;
using DGSR.Domain.Interfaces;

namespace DGSR.Domain.Implementations
{
    public class EmployeeDomain : IEmployeeDomain
    {
        private readonly DGSRContext _context;

        public EmployeeDomain(DGSRContext context)
        {
            _context = context;
        }

        public async Task<bool> Create(Employee employee, Bank bank)
        {
            try
            {
                await _context.Employees.AddAsync(employee);
                await _context.SaveChangesAsync();
                bank.EmployeeId = employee.Id;
                await _context.Banks.AddAsync(bank);
                await _context.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> Delete(Employee employee)
        {
            try
            {
                _context.Employees.Remove(employee);
                await _context.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> Update(Employee employee, Bank bank)
        {
            try
            {
                _context.Entry(employee).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                await _context.SaveChangesAsync();
                _context.Entry(bank).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                await _context.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
