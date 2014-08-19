using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.OData.Builder;
using FimzWebApi.Models;

namespace FimzWebApi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<Post>("Post");
            builder.EntitySet<User>("Users"); 
            builder.EntitySet<Thread>("Threads"); 
            builder.EntitySet<Topic>("Topics"); 
            config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
        }
    }
}
