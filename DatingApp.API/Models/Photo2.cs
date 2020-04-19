using System;

namespace DatingApp.API.Models
{
    public class Photo2
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
        public Reel Reel { get; set; } 
        public int ReelId { get; set; }
    }
}