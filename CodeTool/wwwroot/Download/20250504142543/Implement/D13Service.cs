namespace MESService.Implement
{
    public class D13Service : BaseService<torderlist, ItorderlistRepository>
    , ID13Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public D13Service(ItorderlistRepository torderlistRepository

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

