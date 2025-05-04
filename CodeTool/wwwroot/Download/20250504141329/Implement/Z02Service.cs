namespace MESService.Implement
{
    public class Z02Service : BaseService<torderlist, ItorderlistRepository>
    , IZ02Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public Z02Service(ItorderlistRepository torderlistRepository

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

