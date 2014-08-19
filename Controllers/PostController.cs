using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.Http.OData;
using System.Web.Http.OData.Routing;
using FimzWebApi.Models;

namespace FimzWebApi.Controllers
{
    /*
    To add a route for this controller, merge these statements into the Register method of the WebApiConfig class. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using FimzWebApi.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<Post>("Post");
    builder.EntitySet<User>("Users"); 
    builder.EntitySet<Thread>("Threads"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class PostController : ODataController
    {
        private FimzContext db = new FimzContext();

        // GET odata/Post
        [Queryable]
        public IQueryable<Post> GetPost()
        {
            return db.Posts;
        }

        // GET odata/Post(5)
        [Queryable]
        public SingleResult<Post> GetPost([FromODataUri] int key)
        {
            return SingleResult.Create(db.Posts.Where(post => post.Id == key));
        }

        // PUT odata/Post(5)
        public async Task<IHttpActionResult> Put([FromODataUri] int key, Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != post.Id)
            {
                return BadRequest();
            }

            db.Entry(post).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(post);
        }

        // POST odata/Post
        public async Task<IHttpActionResult> Post(Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Posts.Add(post);
            await db.SaveChangesAsync();

            return Created(post);
        }

        // PATCH odata/Post(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] int key, Delta<Post> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Post post = await db.Posts.FindAsync(key);
            if (post == null)
            {
                return NotFound();
            }

            patch.Patch(post);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(post);
        }

        // DELETE odata/Post(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] int key)
        {
            Post post = await db.Posts.FindAsync(key);
            if (post == null)
            {
                return NotFound();
            }

            db.Posts.Remove(post);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET odata/Post(5)/Poster
        [Queryable]
        public SingleResult<User> GetPoster([FromODataUri] int key)
        {
            return SingleResult.Create(db.Posts.Where(m => m.Id == key).Select(m => m.Poster));
        }

        // GET odata/Post(5)/Thread
        [Queryable]
        public SingleResult<Thread> GetThread([FromODataUri] int key)
        {
            return SingleResult.Create(db.Posts.Where(m => m.Id == key).Select(m => m.Thread));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PostExists(int key)
        {
            return db.Posts.Count(e => e.Id == key) > 0;
        }
    }
}
