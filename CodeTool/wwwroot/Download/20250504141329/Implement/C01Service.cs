namespace MESService.Implement
{
    public class C01Service : BaseService<torderlist, ItorderlistRepository>
    , IC01Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C01Service(ItorderlistRepository torderlistRepository

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

