namespace MESService.Implement
{
    public class Z03Service : BaseService<torderlist, ItorderlistRepository>
    , IZ03Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public Z03Service(ItorderlistRepository torderlistRepository

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

