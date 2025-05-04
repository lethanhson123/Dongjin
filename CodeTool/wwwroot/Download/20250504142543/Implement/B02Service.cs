namespace MESService.Implement
{
    public class B02Service : BaseService<torderlist, ItorderlistRepository>
    , IB02Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public B02Service(ItorderlistRepository torderlistRepository

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

