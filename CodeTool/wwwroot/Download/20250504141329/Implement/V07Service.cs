namespace MESService.Implement
{
    public class V07Service : BaseService<torderlist, ItorderlistRepository>
    , IV07Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public V07Service(ItorderlistRepository torderlistRepository

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

