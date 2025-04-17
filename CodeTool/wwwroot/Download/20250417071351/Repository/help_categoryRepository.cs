namespace MESRepository.Implement
{
    public class help_categoryRepository : BaseRepository<help_category>
    , Ihelp_categoryRepository
    {
    private readonly Context _context;
    public help_categoryRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

