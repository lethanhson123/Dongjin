namespace MESService.Implement
{
    public class B05Service : BaseService<torderlist, ItorderlistRepository>
    , IB05Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public B05Service(ItorderlistRepository torderlistRepository

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

