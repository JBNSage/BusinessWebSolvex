using System;
using System.Collections.Generic;

namespace bwback.Models
{
    public partial class CreditCard
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int UserId { get; set; }
        public string Number { get; set; } = null!;
        public string Cvv { get; set; } = null!;
        public DateTime ExpirationDate { get; set; }

        public virtual User? User { get; set; } = null!;
    }
}
