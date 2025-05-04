namespace MESService.Implement
{
    public class D07Service : BaseService<torderlist, ItorderlistRepository>
    , ID07Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public D07Service(ItorderlistRepository torderlistRepository

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

