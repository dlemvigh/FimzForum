using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using Newtonsoft.Json;

namespace FimzWebApi.Models
{
    public class Post
    {
        [Key]
        public int Id { get; set; }

        [StringLength(4000)]
        public string Body { get; set; }

        public int UserId { get; set; }
        public virtual User Poster { get; set; }

        public int ThreadId { get; set; }
        public virtual Thread Thread { get; set; }

        public DateTime Created { get; set; }
    }
}