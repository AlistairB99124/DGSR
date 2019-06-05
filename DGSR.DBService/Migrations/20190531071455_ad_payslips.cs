using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DGSR.DBService.Migrations
{
    public partial class ad_payslips : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PaySlips",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    HoursLeave = table.Column<decimal>(type: "decimal(8)", nullable: false),
                    HoursNormal = table.Column<decimal>(type: "decimal(8)", nullable: false),
                    HoursOneThird = table.Column<decimal>(type: "decimal(8)", nullable: false),
                    HoursOneHalf = table.Column<decimal>(type: "decimal(8)", nullable: false),
                    HoursDouble = table.Column<decimal>(type: "decimal(8)", nullable: false),
                    HoursEffective = table.Column<decimal>(type: "decimal(8)", nullable: false),
                    GrossPay = table.Column<decimal>(type: "decimal(8)", nullable: false),
                    PAYE = table.Column<decimal>(type: "decimal(8)", nullable: false),
                    SNPF = table.Column<decimal>(type: "decimal(8)", nullable: false),
                    NetPay = table.Column<decimal>(type: "decimal(8)", nullable: false),
                    RelocationAllowance = table.Column<decimal>(type: "decimal(8)", nullable: false),
                    LoanRepay = table.Column<decimal>(type: "decimal(8)", nullable: false),
                    AmountPaid = table.Column<decimal>(type: "decimal(8)", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "DateTime", nullable: false),
                    EmployeeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaySlips", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PaySlips_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PaySlips_EmployeeId",
                table: "PaySlips",
                column: "EmployeeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PaySlips");
        }
    }
}
