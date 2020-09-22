using Microsoft.EntityFrameworkCore;

namespace LEG_Official.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) { }
    }
}