namespace MESService.Implement
{
    public class V05Service : BaseService<torderlist, ItorderlistRepository>
    , IV05Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public V05Service(ItorderlistRepository torderlistRepository

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

