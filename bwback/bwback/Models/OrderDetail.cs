using System;
using System.Collections.Generic;

namespace bwback.Models
{
    public partial class OrderDetail
    {
        public int Id { get; set; }
        public int Order { get; set; }
        public int Product { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }

        public virtual Order OrderNavigation { get; set; } = null!;
        public virtual Product ProductNavigation { get; set; } = null!;
    }
}
