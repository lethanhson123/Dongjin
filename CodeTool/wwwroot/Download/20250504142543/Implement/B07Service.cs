namespace MESService.Implement
{
    public class B07Service : BaseService<torderlist, ItorderlistRepository>
    , IB07Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public B07Service(ItorderlistRepository torderlistRepository

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

