using System;
using System.Collections.Generic;

namespace bwback.Models
{
    public partial class Address
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Street { get; set; } = null!;
        public string Building { get; set; } = null!;
        public string PostalCode { get; set; } = null!;
        public int CityId { get; set; }

        public virtual City? City { get; set; } = null!;
        public virtual User? User { get; set; } = null!;
    }
}
