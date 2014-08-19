using FimzWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FimzWebApi.Context
{
    public class ForumContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Topic> Topics { get; set; }
        public DbSet<Thread> Threads { get; set; }
        public DbSet<Post> Posts { get; set; }
    }
}