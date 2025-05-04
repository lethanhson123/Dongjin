namespace MESService.Implement
{
    public class A02Service : BaseService<torderlist, ItorderlistRepository>
    , IA02Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public A02Service(ItorderlistRepository torderlistRepository

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

