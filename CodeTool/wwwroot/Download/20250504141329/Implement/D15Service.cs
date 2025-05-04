namespace MESService.Implement
{
    public class D15Service : BaseService<torderlist, ItorderlistRepository>
    , ID15Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public D15Service(ItorderlistRepository torderlistRepository

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

