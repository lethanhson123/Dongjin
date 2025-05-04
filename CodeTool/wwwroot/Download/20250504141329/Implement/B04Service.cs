namespace MESService.Implement
{
    public class B04Service : BaseService<torderlist, ItorderlistRepository>
    , IB04Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public B04Service(ItorderlistRepository torderlistRepository

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

