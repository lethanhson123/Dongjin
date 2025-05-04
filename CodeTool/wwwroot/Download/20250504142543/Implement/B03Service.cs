namespace MESService.Implement
{
    public class B03Service : BaseService<torderlist, ItorderlistRepository>
    , IB03Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public B03Service(ItorderlistRepository torderlistRepository

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

