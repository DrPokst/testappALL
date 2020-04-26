using System;
using System.Collections.Generic;
using DatingApp.API.Models;

namespace DatingApp.API.DTOs
{
    public class ReelsForListDto
    {
        public int Id { get; set; }
        public string CMnf { get; set; }
        public int QTY { get; set; }
        public string PhotoUrl2 { get; set; }
        public string Location { get; set; }
        public ICollection<Photo2> Photos2 { get; set; }
    }
}