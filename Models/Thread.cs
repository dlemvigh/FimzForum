using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FimzWebApi.Models
{
    public class Thread
    {
        [Key]
        public int Id { get; set; }

        [Index]
        [StringLength(200)]
        public string Title { get; set; }

        public int TopicId { get; set; }

        public virtual Topic Topic { get; set; }
    }
}