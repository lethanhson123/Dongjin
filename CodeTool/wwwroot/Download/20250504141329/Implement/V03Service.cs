namespace MESService.Implement
{
    public class V03Service : BaseService<torderlist, ItorderlistRepository>
    , IV03Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public V03Service(ItorderlistRepository torderlistRepository

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

