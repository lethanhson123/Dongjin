namespace MESService.Implement
{
    public class Z07Service : BaseService<torderlist, ItorderlistRepository>
    , IZ07Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public Z07Service(ItorderlistRepository torderlistRepository

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

