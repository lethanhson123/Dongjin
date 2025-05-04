namespace MESService.Implement
{
    public class D04Service : BaseService<torderlist, ItorderlistRepository>
    , ID04Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public D04Service(ItorderlistRepository torderlistRepository

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

