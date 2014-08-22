namespace FimzWebApi.Migrations
{
    using FimzWebApi.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration :
        DbMigrationsConfiguration<FimzWebApi.Models.FimzContext>
        //DropCreateDatabaseIfModelChanges<FimzContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(FimzWebApi.Models.FimzContext context)
        {
            var userJohn = new User { Name = "John Doe" };
            var userJane = new User { Name = "Jane Doe" };

            context.Users.AddOrUpdate(
                u => u.Name,
                userJohn,
                userJane);

            var topicMovies = new Topic { Name = "Movies", Description = "Here we discuss all the movies" };
            var topicFun = new Topic { Name = "Fun", Description = "Jokes, cat videos, and stuff" };

            context.Topics.AddOrUpdate(
                t => t.Name,
                topicMovies,
                topicFun);

            var threadLotR = new Thread { Title = "Lord of the Rings", Topic = topicMovies };
            var threadCasablanca = new Thread { Title = "Casablanca", Topic = topicMovies };

            context.Threads.AddOrUpdate(
                t => t.Title,
                threadLotR,
                threadCasablanca);

            var postLotrFirst = new Post
            {
                Poster = userJohn,
                Thread = threadLotR,
                Body = "Peter Jackson 4-ever!",
                Created = new DateTime(2014, 2, 28, 20, 4, 56),
            };
            var postLotrResponse = new Post
            {
                Poster = userJane,
                Thread = threadLotR,
                Body = "Michael Bay sux ballz",
                Created = new DateTime(2014, 2, 28, 21, 22, 04),
            };

            context.Posts.AddOrUpdate(
                p => p.Body,
                postLotrFirst,
                postLotrResponse
                );
        }
    }
}
