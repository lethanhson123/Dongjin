namespace MESService.Implement
{
    public class B11Service : BaseService<torderlist, ItorderlistRepository>
    , IB11Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public B11Service(ItorderlistRepository torderlistRepository

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

