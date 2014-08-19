namespace FimzWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class indexes : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.Users", "Name");
            CreateIndex("dbo.Threads", "Title");
            CreateIndex("dbo.Topics", "Name");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Topics", new[] { "Name" });
            DropIndex("dbo.Threads", new[] { "Title" });
            DropIndex("dbo.Users", new[] { "Name" });
        }
    }
}
