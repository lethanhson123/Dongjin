namespace MESService.Implement
{
    public class C04Service : BaseService<torderlist, ItorderlistRepository>
    , IC04Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public C04Service(ItorderlistRepository torderlistRepository

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

