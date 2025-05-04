namespace MESService.Implement
{
    public class B12Service : BaseService<torderlist, ItorderlistRepository>
    , IB12Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public B12Service(ItorderlistRepository torderlistRepository

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

