using Microsoft.EntityFrameworkCore.Migrations;

namespace DGSR.DBService.Migrations
{
    public partial class ad_wag : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "Wage",
                table: "Employees",
                type: "decimal(5)",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Wage",
                table: "Employees");
        }
    }
}
