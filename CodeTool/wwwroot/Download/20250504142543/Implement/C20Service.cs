namespace MESService.Implement
{
    public class C20Service : BaseService<torderlist, ItorderlistRepository>
    , IC20Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C20Service(ItorderlistRepository torderlistRepository

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

