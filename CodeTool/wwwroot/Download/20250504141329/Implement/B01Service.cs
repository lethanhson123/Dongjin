namespace MESService.Implement
{
    public class B01Service : BaseService<torderlist, ItorderlistRepository>
    , IB01Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public B01Service(ItorderlistRepository torderlistRepository

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

