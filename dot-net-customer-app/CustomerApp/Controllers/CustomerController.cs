using CustomerApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CustomerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CustomerController : ControllerBase
    {
        CustomerDbreactContext db;
        IConfiguration config;
        public CustomerController(CustomerDbreactContext _db, IConfiguration _config)
        {
            db = _db;
            config = _config;
        }
        [HttpGet]
        public IEnumerable<Customer> GetCustomer()
        {
            return db.Customers;
        }
        [HttpPost]
        public IActionResult PostCustomer(Customer customer)
        {
            db.Customers.Add(customer);
            db.SaveChanges();
            return Ok();
        }
        [HttpPut]
        public IActionResult PutCustomer(Customer customer)
        {
            db.Customers.Update(customer);
            db.SaveChanges();
            return Ok();
        }
        [HttpDelete]
        public IActionResult DeleteCustomer(int id)
        {
            var item=db.Customers.FirstOrDefault(x=>x.Id==id);
            db.Customers.Remove(item);
            db.SaveChanges();
            return Ok();
        }
    }
}
