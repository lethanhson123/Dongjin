namespace MESService.Implement
{
    public class A04Service : BaseService<torderlist, ItorderlistRepository>
    , IA04Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public A04Service(ItorderlistRepository torderlistRepository

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

