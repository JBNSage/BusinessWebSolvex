using System;
using System.Collections.Generic;

namespace bwback.Models
{
    public partial class Category
    {
        public Category()
        {
            Products = new HashSet<Product>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Picture { get; set; }


        public virtual ICollection<Product> Products { get; set; }
    }
}
