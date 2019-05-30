using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DGSR.Application.Interfaces;
using DGSR.Infrastructure.ViewModels.EmployeeModule;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DGSR.API.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : BaseController
    {
        private readonly IEmployee _employee;
        public EmployeeController(IEmployee employee)
        {
            _employee = employee;
        }

        [HttpPost("Create")]
        public async Task<JsonResult> Create([FromBody] EmployeeViewModel employee)
        {
            var result = await _employee.Create(employee);
            return GenerateResult(result);
        }

        [HttpPost("Update")]
        public async Task<JsonResult> Update([FromBody] EmployeeViewModel employee)
        {
            var result = await _employee.Update(employee);
            return GenerateResult(result);
        }

        [HttpPost("Read")]
        public async Task<JsonResult> Read([FromBody] IdInput input)
        {
            var result = await _employee.Read(input.Id);
            return GenerateResult(result);
        }

        [HttpPost("ReadAll")]
        public async Task<JsonResult> ReadAll()
        {
            var result = await _employee.Read();
            return GenerateResult(result);
        }

        [HttpPost("Delete")]
        public async Task<JsonResult> Delete([FromBody] int employeeId)
        {
            var result = await _employee.Delete(employeeId);
            return GenerateResult(result);
        }
    }
}