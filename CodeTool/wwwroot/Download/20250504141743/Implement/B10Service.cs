namespace MESService.Implement
{
    public class B10Service : BaseService<torderlist, ItorderlistRepository>
    , IB10Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public B10Service(ItorderlistRepository torderlistRepository

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

