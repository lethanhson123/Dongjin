namespace MESService.Implement
{
    public class C11Service : BaseService<torderlist, ItorderlistRepository>
    , IC11Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C11Service(ItorderlistRepository torderlistRepository

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

