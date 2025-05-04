namespace MESService.Implement
{
    public class C17Service : BaseService<torderlist, ItorderlistRepository>
    , IC17Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C17Service(ItorderlistRepository torderlistRepository

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

