namespace MESService.Implement
{
    public class Z05Service : BaseService<torderlist, ItorderlistRepository>
    , IZ05Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public Z05Service(ItorderlistRepository torderlistRepository

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

