namespace MESService.Implement
{
    public class D02Service : BaseService<torderlist, ItorderlistRepository>
    , ID02Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public D02Service(ItorderlistRepository torderlistRepository

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

