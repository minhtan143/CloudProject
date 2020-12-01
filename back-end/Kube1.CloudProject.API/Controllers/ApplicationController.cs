using Microsoft.AspNetCore.Mvc;

namespace Kube1.CloudProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {
        [HttpGet("GetVersion")]
        public IActionResult GetVersion()
        {
            return new ObjectResult("1.0.0.0");
        }
    }


}
