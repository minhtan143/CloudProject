using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Kube1.CloudProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {
        public readonly Random random = new Random();

        [HttpGet("RandomInteger")]
        public async Task<IActionResult> RandomInteger(int minValue = 0, int maxValue = int.MaxValue)
        {
            return new ObjectResult(await Task.Run(() => random.Next(minValue, maxValue)));
        }

        [HttpGet("ListRandomizer")]
        public async Task<IActionResult> ListRandomizer(string input)
        {
            return await Task.Run(() =>
            {
                string[] res = input.Split(Environment.NewLine.ToCharArray());
                int loop = random.Next(res.Length, 2 * res.Length);
                while (loop-- > 0)
                {
                    int i = random.Next(res.Length);
                    int j = random.Next(res.Length);
                    (res[i], res[j]) = (res[j], res[i]);
                }
                return new ObjectResult(res);
            });
        }

        [HttpGet("RandomDecimal")]
        public async Task<IActionResult> RandomDecimal()
        {
            return new ObjectResult(await Task.Run(() => random.NextDouble()));
        }

        [HttpGet("StringGenerator")]
        public async Task<IActionResult> StringGenerator(int stringCount = 10, int characterCount = 10, bool digits = true, bool upperLetter = false, bool lowerLetter = false, bool allowDuplicate = false)
        {
            return await Task.Run(() =>
            {
                string resources = "";
                if (digits)
                    resources += "0123456789";
                if (upperLetter)
                    resources += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                if (lowerLetter)
                    resources += "abcdefghijklmnopqrstuvwxyz";

                List<string> res = new List<string>();
                for (int i = 0; i < stringCount; i++)
                {
                    string s = "";
                    string source = resources;
                    for (int j = 0; j < characterCount; j++)
                    {
                        int t = random.Next(source.Length);
                        s += source[t];
                        if (!allowDuplicate)
                            source = source.Remove(t, 1);
                    }
                    res.Add(s);
                }

                return new ObjectResult(res);
            });
        }
    }
}
