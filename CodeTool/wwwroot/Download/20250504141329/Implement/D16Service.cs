namespace MESService.Implement
{
    public class D16Service : BaseService<torderlist, ItorderlistRepository>
    , ID16Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public D16Service(ItorderlistRepository torderlistRepository

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

