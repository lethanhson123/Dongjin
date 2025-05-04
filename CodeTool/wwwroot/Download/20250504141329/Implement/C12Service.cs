namespace MESService.Implement
{
    public class C12Service : BaseService<torderlist, ItorderlistRepository>
    , IC12Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C12Service(ItorderlistRepository torderlistRepository

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

