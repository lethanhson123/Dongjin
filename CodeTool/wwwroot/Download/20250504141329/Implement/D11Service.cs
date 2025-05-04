namespace MESService.Implement
{
    public class D11Service : BaseService<torderlist, ItorderlistRepository>
    , ID11Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public D11Service(ItorderlistRepository torderlistRepository

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

