namespace MESService.Implement
{
    public class B09Service : BaseService<torderlist, ItorderlistRepository>
    , IB09Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public B09Service(ItorderlistRepository torderlistRepository

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

