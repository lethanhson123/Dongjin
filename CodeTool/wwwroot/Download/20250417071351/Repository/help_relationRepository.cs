namespace MESRepository.Implement
{
    public class help_relationRepository : BaseRepository<help_relation>
    , Ihelp_relationRepository
    {
    private readonly Context _context;
    public help_relationRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

