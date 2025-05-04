namespace MESService.Implement
{
    public class C03Service : BaseService<torderlist, ItorderlistRepository>
    , IC03Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C03Service(ItorderlistRepository torderlistRepository

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

