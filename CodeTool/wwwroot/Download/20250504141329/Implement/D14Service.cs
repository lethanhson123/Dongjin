namespace MESService.Implement
{
    public class D14Service : BaseService<torderlist, ItorderlistRepository>
    , ID14Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public D14Service(ItorderlistRepository torderlistRepository

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

