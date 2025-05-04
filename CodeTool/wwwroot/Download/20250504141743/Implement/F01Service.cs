namespace MESService.Implement
{
    public class F01Service : BaseService<torderlist, ItorderlistRepository>
    , IF01Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public F01Service(ItorderlistRepository torderlistRepository

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

