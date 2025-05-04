namespace MESService.Implement
{
    public class D01Service : BaseService<torderlist, ItorderlistRepository>
    , ID01Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public D01Service(ItorderlistRepository torderlistRepository

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

