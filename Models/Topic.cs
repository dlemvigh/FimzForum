using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FimzWebApi.Models
{
    public class Topic
    {
        [Key]
        public int Id { get; set; }

        [Index]
        [StringLength(200)]
        public string Name { get; set; }

        [StringLength(4000)]
        public string Description { get; set; }
    }
}