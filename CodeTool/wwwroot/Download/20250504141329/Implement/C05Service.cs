namespace MESService.Implement
{
    public class C05Service : BaseService<torderlist, ItorderlistRepository>
    , IC05Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C05Service(ItorderlistRepository torderlistRepository

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

