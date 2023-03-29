using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ElasticKibaanaLogging.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ElasticSerarchController : ControllerBase
    {
        private readonly ILogger<ElasticSerarchController> _logger;
        public ElasticSerarchController(ILogger<ElasticSerarchController> logger)
        {
            _logger=logger;
        }
        [HttpGet]
        public int GetRandomValue()
        {
            var random = new Random();
            var randomValue = random.Next(0,100);
            _logger.LogInformation($"Random Value is {randomValue}");
            return randomValue;
        }
        //Get Api/Values/5
        [HttpGet("{id}")]
        public string ThrowErrorMessage(int id)
        {
            try
            {
                if (id <= 0)
                {
                    throw new Exception($"id cannot be less than or equal to 0.value passed is {id}");
                }
                return id.ToString();
            }
            catch(Exception ex)
            {
                _logger.LogError(ex,ex.Message);
            }
            return string.Empty;
        }
    }
}
