using DGSR.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DGSR.DBService.Context
{
    public class DGSRContext : IdentityDbContext<User>
    {
        public DGSRContext(DbContextOptions<DGSRContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Bank> Banks { get; set; }
        public DbSet<PaySlip> PaySlips { get; set; }

    }
}
