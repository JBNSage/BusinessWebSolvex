using System;
using System.Collections.Generic;

namespace bwback.Models
{
    public partial class Country
    {
        public Country()
        {
            Cities = new HashSet<City>();
            Users = new HashSet<User>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Flag { get; set; }

        public virtual ICollection<City> Cities { get; set; }
        public virtual ICollection<User> Users { get; set; }
    }
}
