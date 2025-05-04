namespace MESService.Implement
{
    public class C16Service : BaseService<torderlist, ItorderlistRepository>
    , IC16Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C16Service(ItorderlistRepository torderlistRepository

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

