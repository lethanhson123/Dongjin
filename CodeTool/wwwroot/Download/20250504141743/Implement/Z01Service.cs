namespace MESService.Implement
{
    public class Z01Service : BaseService<torderlist, ItorderlistRepository>
    , IZ01Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public Z01Service(ItorderlistRepository torderlistRepository

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

