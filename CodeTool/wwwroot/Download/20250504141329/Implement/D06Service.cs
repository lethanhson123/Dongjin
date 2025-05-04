namespace MESService.Implement
{
    public class D06Service : BaseService<torderlist, ItorderlistRepository>
    , ID06Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public D06Service(ItorderlistRepository torderlistRepository

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

