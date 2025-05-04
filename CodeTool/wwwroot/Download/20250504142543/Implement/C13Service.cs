namespace MESService.Implement
{
    public class C13Service : BaseService<torderlist, ItorderlistRepository>
    , IC13Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C13Service(ItorderlistRepository torderlistRepository

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

