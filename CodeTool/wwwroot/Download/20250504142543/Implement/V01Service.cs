namespace MESService.Implement
{
    public class V01Service : BaseService<torderlist, ItorderlistRepository>
    , IV01Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public V01Service(ItorderlistRepository torderlistRepository

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

