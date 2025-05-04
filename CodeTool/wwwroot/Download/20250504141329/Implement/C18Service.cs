namespace MESService.Implement
{
    public class C18Service : BaseService<torderlist, ItorderlistRepository>
    , IC18Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C18Service(ItorderlistRepository torderlistRepository

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

