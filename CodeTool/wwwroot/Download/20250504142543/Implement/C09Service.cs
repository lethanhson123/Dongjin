namespace MESService.Implement
{
    public class C09Service : BaseService<torderlist, ItorderlistRepository>
    , IC09Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C09Service(ItorderlistRepository torderlistRepository

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

