using Microsoft.AspNetCore.Mvc;
using api_service.Models;
using System.Data;
using System.Data.SqlClient;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using Oracle.ManagedDataAccess.Client;
using Oracle.ManagedDataAccess.Types;

namespace api_service
{
    [Route("SQL")]
    [ApiController]

    public class SQLController : Controller
    {
        private readonly IConfiguration _configuration;

        public SQLController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("ChkLogin")]
        public IActionResult ChkLogin(UserModels us)
        {
            DataTable profile_dt = new DataTable();

            string query = @"SELECT * FROM tbl_users WHERE u_email=@u_email AND u_password=@u_password;";
            string connnectstr = _configuration.GetConnectionString("mySql");

            // Connect DB ( SQL Server)
            MySqlDataReader checkProfile;

            using (MySqlConnection con = new MySqlConnection(connnectstr))
            {
                con.Open();
                using (MySqlCommand custProfile = new MySqlCommand(query, con))
                {
                    custProfile.Parameters.AddWithValue("@u_email", us.u_email);
                    custProfile.Parameters.AddWithValue("@u_password", us.u_password);

                    checkProfile = custProfile.ExecuteReader();
                    profile_dt.Load(checkProfile);
                    checkProfile.Close();
                }
                con.Close();
            }
            // Convert to Json
            string JSONresult;

            JSONresult = JsonConvert.SerializeObject(profile_dt);

            return Ok(JSONresult);
        }


    }

}