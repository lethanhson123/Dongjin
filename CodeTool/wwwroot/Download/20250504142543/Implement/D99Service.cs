namespace MESService.Implement
{
    public class D99Service : BaseService<torderlist, ItorderlistRepository>
    , ID99Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public D99Service(ItorderlistRepository torderlistRepository

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

