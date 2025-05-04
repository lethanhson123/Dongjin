namespace MESService.Implement
{
    public class A01Service : BaseService<torderlist, ItorderlistRepository>
    , IA01Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public A01Service(ItorderlistRepository torderlistRepository

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

