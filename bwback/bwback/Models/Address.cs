using System;
using System.Collections.Generic;

namespace bwback.Models
{
    public partial class Address
    {
        public int Id { get; set; }
        public int User { get; set; }
        public byte[] Street { get; set; } = null!;
        public string Building { get; set; } = null!;
        public string PostalCode { get; set; } = null!;
        public int City { get; set; }

        public virtual City CityNavigation { get; set; } = null!;
        public virtual User UserNavigation { get; set; } = null!;
    }
}
