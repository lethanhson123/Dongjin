namespace MESService.Implement
{
    public class C02Service : BaseService<torderlist, ItorderlistRepository>
    , IC02Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C02Service(ItorderlistRepository torderlistRepository

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

