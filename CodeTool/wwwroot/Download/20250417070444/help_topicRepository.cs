namespace MESRepository.Implement
{
    public class help_topicRepository : BaseRepository<help_topic>
    , Ihelp_topicRepository
    {
    private readonly Context _context;
    public help_topicRepository(Context context) : base(context)
    {
    _context = context;
    }
    }
    }

