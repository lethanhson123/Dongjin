namespace MESService.Implement
{
    public class A06Service : BaseService<torderlist, ItorderlistRepository>
    , IA06Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public A06Service(ItorderlistRepository torderlistRepository

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

