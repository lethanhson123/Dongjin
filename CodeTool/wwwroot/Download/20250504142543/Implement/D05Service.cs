namespace MESService.Implement
{
    public class D05Service : BaseService<torderlist, ItorderlistRepository>
    , ID05Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public D05Service(ItorderlistRepository torderlistRepository

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

