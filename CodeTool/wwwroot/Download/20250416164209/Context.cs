namespace MESContext.Context
{
    public partial class Context : DbContext
    {
        public Context()
        {
        }
        public Context(DbContextOptions<Context>
    options)
    : base(options)
    {
    }

    public virtual DbSet<help_topic> help_topic { get; set; }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
    if (!optionsBuilder.IsConfigured)
    {
    }
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
    var decimalProps = modelBuilder.Model.GetEntityTypes().SelectMany(t => t.GetProperties()).Where(p => (System.Nullable.GetUnderlyingType(p.ClrType) ?? p.ClrType) == typeof(decimal));
    foreach (var property in decimalProps)
    {
    property.SetPrecision(18);
    property.SetScale(2);
    }
    OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
    }


