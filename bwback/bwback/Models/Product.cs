using System;
using System.Collections.Generic;

namespace bwback.Models
{
    public partial class Product
    {
        public Product()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int Price { get; set; }
        public int Quantity { get; set; }
        public int Provider { get; set; }
        public int Category { get; set; }
        public byte Rating { get; set; }
        public string? Picture { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual Category CategoryNavigation { get; set; } = null!;
        public virtual Provider ProviderNavigation { get; set; } = null!;
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
