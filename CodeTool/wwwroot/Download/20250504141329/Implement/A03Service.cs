namespace MESService.Implement
{
    public class A03Service : BaseService<torderlist, ItorderlistRepository>
    , IA03Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public A03Service(ItorderlistRepository torderlistRepository

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

