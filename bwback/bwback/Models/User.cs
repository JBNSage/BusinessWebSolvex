using System;
using System.Collections.Generic;

namespace bwback.Models
{
    public partial class User
    {
        public User()
        {
            Addresses = new HashSet<Address>();
            CreditCards = new HashSet<CreditCard>();
        }

        public int Id { get; set; }
        public string Email { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string? Phone { get; set; }
        public int? Country { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual ICollection<Address> Addresses { get; set; }
        public virtual ICollection<CreditCard> CreditCards { get; set; }
    }
}
