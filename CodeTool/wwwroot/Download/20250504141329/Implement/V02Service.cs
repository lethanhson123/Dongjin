namespace MESService.Implement
{
    public class V02Service : BaseService<torderlist, ItorderlistRepository>
    , IV02Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public V02Service(ItorderlistRepository torderlistRepository

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

