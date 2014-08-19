using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FimzWebApi.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Index]
        [StringLength(200)]
        public string Name { get; set; }

    }
}