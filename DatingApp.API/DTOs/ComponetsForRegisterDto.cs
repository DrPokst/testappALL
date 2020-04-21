using System;
using System.Collections.Generic;
using DatingApp.API.Models;

namespace DatingApp.API.DTOs
{
    public class ComponetsForRegisterDto
    {   
        public int Id { get; set; }
        public string Mnf { get; set; }
        public string Manufacturer { get; set; }
        public string Detdescription { get; set; }
        public string BuhNr { get; set; }
        public string Size { get; set; }
        public string Type { get; set; }
        public string Nominal { get; set; }
        public string Furl { get; set; }
        public string Durl { get; set; }
        public string Murl { get; set; }
    }
}