using System;
using System.Collections.Generic;
using DatingApp.API.Models;

namespace DatingApp.API.DTOs
{
    public class ComponetsForRegisterDto
    {
         public int Id { get; set; }
        public string Mnf { get; set; }
        public string Type { get; set; }
        public string Size { get; set; }
        public string Nominal { get; set; }
        
    }
}