using CustomerApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CustomerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        public CustomerController()
        {

        }
        [HttpGet]
        public IEnumerable<Customer> GetCustomer()
        {
            CustomerDbreactContext db = new CustomerDbreactContext();
            return db.Customers;
        }
        [HttpPost]
        public IActionResult PostCustomer(Customer customer)
        {
            CustomerDbreactContext db = new CustomerDbreactContext();
            db.Customers.Add(customer);
            db.SaveChanges();
            return Ok();
        }
    }
}
