namespace MESService.Implement
{
    public class A09Service : BaseService<torderlist, ItorderlistRepository>
    , IA09Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public A09Service(ItorderlistRepository torderlistRepository

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

