namespace MESService.Implement
{
    public class C06Service : BaseService<torderlist, ItorderlistRepository>
    , IC06Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C06Service(ItorderlistRepository torderlistRepository

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

