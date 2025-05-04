namespace MESService.Implement
{
    public class B06Service : BaseService<torderlist, ItorderlistRepository>
    , IB06Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public B06Service(ItorderlistRepository torderlistRepository

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

