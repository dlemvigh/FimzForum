namespace FimzWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedpostthreadandtopic : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Posts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Body = c.String(maxLength: 4000),
                        UserId = c.Int(nullable: false),
                        ThreadId = c.Int(nullable: false),
                        Created = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: true)
                .ForeignKey("dbo.Threads", t => t.ThreadId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.ThreadId);
            
            CreateTable(
                "dbo.Threads",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(maxLength: 200),
                        TopicId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Topics", t => t.TopicId, cascadeDelete: true)
                .Index(t => t.TopicId);
            
            CreateTable(
                "dbo.Topics",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(maxLength: 200),
                        Description = c.String(maxLength: 4000),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Posts", "ThreadId", "dbo.Threads");
            DropForeignKey("dbo.Threads", "TopicId", "dbo.Topics");
            DropForeignKey("dbo.Posts", "UserId", "dbo.Users");
            DropIndex("dbo.Threads", new[] { "TopicId" });
            DropIndex("dbo.Posts", new[] { "ThreadId" });
            DropIndex("dbo.Posts", new[] { "UserId" });
            DropTable("dbo.Topics");
            DropTable("dbo.Threads");
            DropTable("dbo.Posts");
        }
    }
}
