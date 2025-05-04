namespace MESService.Implement
{
    public class D03Service : BaseService<torderlist, ItorderlistRepository>
    , ID03Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public D03Service(ItorderlistRepository torderlistRepository

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

