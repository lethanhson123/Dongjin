namespace MESService.Implement
{
    public class D09Service : BaseService<torderlist, ItorderlistRepository>
    , ID09Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public D09Service(ItorderlistRepository torderlistRepository

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

