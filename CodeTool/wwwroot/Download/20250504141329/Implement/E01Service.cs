namespace MESService.Implement
{
    public class E01Service : BaseService<torderlist, ItorderlistRepository>
    , IE01Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public E01Service(ItorderlistRepository torderlistRepository

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

