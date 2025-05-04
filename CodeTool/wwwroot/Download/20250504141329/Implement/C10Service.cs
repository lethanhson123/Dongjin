namespace MESService.Implement
{
    public class C10Service : BaseService<torderlist, ItorderlistRepository>
    , IC10Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C10Service(ItorderlistRepository torderlistRepository

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

