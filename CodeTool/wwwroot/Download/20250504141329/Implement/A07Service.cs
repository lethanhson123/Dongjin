namespace MESService.Implement
{
    public class A07Service : BaseService<torderlist, ItorderlistRepository>
    , IA07Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public A07Service(ItorderlistRepository torderlistRepository

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

