namespace MESService.Implement
{
    public class A05Service : BaseService<torderlist, ItorderlistRepository>
    , IA05Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public A05Service(ItorderlistRepository torderlistRepository

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

