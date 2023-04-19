using Azure;
using CustomerApp.Models;
using CustomerApp.ViewModel;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace CustomerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        CustomerDbreactContext db;
        IConfiguration config;
        public LoginController(CustomerDbreactContext _db, IConfiguration _config)
        {
            db = _db;
            config = _config;
        }
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(TblLogin login)
        {
            IActionResult response = Unauthorized();
            var user = AuthenticateUser(login);
            if (user != null)
            {
                var tokenString = GenerateJsonWebToken(user);
                if (tokenString.IsNullOrEmpty())
                {
                    response = Ok(new ResponseViewModel { Status = 200, Message = "Some error Occured" });
                }
                response = Ok(new { token = tokenString });
            }
            return response;
        }
        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register(TblLogin login)
        {
            db.TblLogins.Add(login);
            await db.SaveChangesAsync();
            var tokenString = GenerateJsonWebToken(new UserModel { UserName = login.UserName, Password = login.Password });
            if (tokenString.IsNullOrEmpty())
            {
                return Ok(new ResponseViewModel { Status = 200, Message = "Some error Occured" });
            }
            return Ok(new { token = tokenString });
            //return Created("succcess",login);
        }

        private UserModel AuthenticateUser(TblLogin login)
        {
            UserModel user = null;
            if (db.TblLogins.Any(x => x.UserName == login.UserName && x.Password == login.Password))
            {

                user = new UserModel { UserName = login.UserName, Password = login.Password };
            }
            return user;
        }

        private string GenerateJsonWebToken(UserModel user)
        {
            try
            {
                var Key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["JWT:Key"]));
                var credentials = new SigningCredentials(Key, SecurityAlgorithms.HmacSha256);
                var token = new JwtSecurityToken(
                    config["JWT:Issuer"],
                    config["JWT:Audience"],
                    null,
                    expires: DateTime.Now.AddMinutes(120),
                    signingCredentials: credentials
                    );

                // var tokenDesc = new JwtSecurityTokenHandler().CreateToken(token);
                return new JwtSecurityTokenHandler().WriteToken(token);
            }
            catch (Exception ex)
            {
                return "";
            }

        }
    }
}
