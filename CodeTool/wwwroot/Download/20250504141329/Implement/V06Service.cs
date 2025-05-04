namespace MESService.Implement
{
    public class V06Service : BaseService<torderlist, ItorderlistRepository>
    , IV06Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public V06Service(ItorderlistRepository torderlistRepository

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

