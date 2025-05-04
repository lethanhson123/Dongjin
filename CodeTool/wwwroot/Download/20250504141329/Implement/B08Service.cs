namespace MESService.Implement
{
    public class B08Service : BaseService<torderlist, ItorderlistRepository>
    , IB08Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public B08Service(ItorderlistRepository torderlistRepository

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

