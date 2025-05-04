namespace MESService.Implement
{
    public class F03Service : BaseService<torderlist, ItorderlistRepository>
    , IF03Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public F03Service(ItorderlistRepository torderlistRepository

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

