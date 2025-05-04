namespace MESService.Implement
{
    public class Z06Service : BaseService<torderlist, ItorderlistRepository>
    , IZ06Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public Z06Service(ItorderlistRepository torderlistRepository

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

