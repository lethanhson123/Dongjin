namespace MESService.Implement
{
    public class V04Service : BaseService<torderlist, ItorderlistRepository>
    , IV04Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public V04Service(ItorderlistRepository torderlistRepository

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

