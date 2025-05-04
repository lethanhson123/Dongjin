namespace MESService.Implement
{
    public class C08Service : BaseService<torderlist, ItorderlistRepository>
    , IC08Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C08Service(ItorderlistRepository torderlistRepository

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

