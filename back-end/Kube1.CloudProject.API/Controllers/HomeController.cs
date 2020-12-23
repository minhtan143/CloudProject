using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Kube1.CloudProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {
        public readonly Random random = new Random();

        [HttpGet("RandomInteger/{minValue=0}/{maxValue=int.MaxValue}")]
        public async Task<IActionResult> RandomInteger(int minValue = 0, int maxValue = int.MaxValue)
        {
            return new ObjectResult(await Task.Run(() => random.Next(minValue, maxValue)));
        }
    }
}
