namespace MESService.Implement
{
    public class C14Service : BaseService<torderlist, ItorderlistRepository>
    , IC14Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C14Service(ItorderlistRepository torderlistRepository

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

