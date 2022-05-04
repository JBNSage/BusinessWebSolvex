using System;
using System.Collections.Generic;

namespace bwback.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int Id { get; set; }
        public int UserId { get; set; }
        public string State { get; set; } = null!;
        public string Card { get; set; } = null!;
        public DateTime EstimatedArrival { get; set; }
        public DateTime? ArrivedAt { get; set; }
        public DateTime? CanceledAt { get; set; }
        public int Total { get; set; }
        public int ShippingCost { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual User? User { get; set; } = null!;
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
