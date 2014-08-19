using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FimzWebApi.Controllers
{
    public class TestController : ApiController
    {
        [HttpGet]
        public string Test(int id)
        {
            return "test " + (id * id);
        }

    }
}
