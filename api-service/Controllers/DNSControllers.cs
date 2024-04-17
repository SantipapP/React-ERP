using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.DirectoryServices;
using System.DirectoryServices.AccountManagement;
using ICBService.Models;
//using CCRSService.Helpers;

namespace ICBService.Controllers
{
    [ApiController]
    [Route("DNS")]
    public class DNSControllers : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public DNSControllers(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("ChkUserAD")]
        public IActionResult verifylogin(loginModels lg)
        {
            var context = new PrincipalContext(ContextType.Domain, "172.19.240.37");

            DirectoryEntry de = new DirectoryEntry();
            UserPrincipal user = new UserPrincipal(context) { SamAccountName = lg.username };
            PrincipalSearcher searcher = new PrincipalSearcher { QueryFilter = user };

            bool validated = context.ValidateCredentials(lg.username, lg.password);

            if (validated)
            {
                UserProfile profile = new UserProfile();
                //var jwt = _jwtService.Generate(lg.username);
                foreach (var result in searcher.FindAll())
                {
                    de = result.GetUnderlyingObject() as DirectoryEntry;
                    profile.Name = de.Properties["givenName"].Value.ToString();
                    profile.Lname = de.Properties["sn"].Value.ToString();
                    profile.username = de.Properties["samAccountName"].Value.ToString();
                    profile.email = de.Properties["userPrincipalName"].Value.ToString();
                    profile.Department = de.Properties["department"].Value.ToString();
                    profile.title = de.Properties["title"].Value.ToString();
                }
                return Ok(profile);
            }
            else
            {
                return Unauthorized(new { message = "Invalid Credentials" });
            }
        }

        // [HttpPost("login")]
        // public IActionResult verifylogin(loginModels lg)
        // {
        //     var context = new PrincipalContext(ContextType.Domain, "172.19.240.37");

        //     DirectoryEntry de = new DirectoryEntry();
        //     UserPrincipal user = new UserPrincipal(context) { SamAccountName = lg.username };
        //     PrincipalSearcher searcher = new PrincipalSearcher { QueryFilter = user };

        //     bool validated = context.ValidateCredentials(lg.username, lg.password);

        //     if (validated)
        //     {
        //         UserProfile profile = new UserProfile();
        //         //var jwt = _jwtService.Generate(lg.username);
        //         foreach (var result in searcher.FindAll())
        //         {
        //             de = result.GetUnderlyingObject() as DirectoryEntry;
        //             profile.Name = de.Properties["givenName"].Value.ToString();
        //             profile.Lname = de.Properties["sn"].Value.ToString();
        //             profile.username = de.Properties["samAccountName"].Value.ToString();
        //             profile.email = de.Properties["userPrincipalName"].Value.ToString();
        //             profile.Department = de.Properties["department"].Value.ToString();
        //             profile.title = de.Properties["title"].Value.ToString();
        //         }
        //         return Ok(profile);
        //     }
        //     else
        //     {
        //         return Unauthorized(new { message = "Invalid Credentials" });
        //     }
        // }
    }
}