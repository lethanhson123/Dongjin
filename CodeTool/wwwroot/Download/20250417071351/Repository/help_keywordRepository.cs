namespace MESRepository.Implement
{
    public class help_keywordRepository : BaseRepository<help_keyword>
    , Ihelp_keywordRepository
    {
    private readonly Context _context;
    public help_keywordRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

