namespace MESService.Implement
{
    public class C19Service : BaseService<torderlist, ItorderlistRepository>
    , IC19Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C19Service(ItorderlistRepository torderlistRepository

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

