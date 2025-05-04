namespace MESService.Implement
{
    public class C15Service : BaseService<torderlist, ItorderlistRepository>
    , IC15Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C15Service(ItorderlistRepository torderlistRepository

    ) : base(torderlistRepository)
    {
    _torderlistRepository = torderlistRepository;
    }
    public override void Initialization(torderlist model)
    {
    BaseInitialization(model);
    }
    }
    }

