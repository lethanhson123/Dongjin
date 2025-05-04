namespace MESService.Implement
{
    public class E20Service : BaseService<torderlist, ItorderlistRepository>
    , IE20Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public E20Service(ItorderlistRepository torderlistRepository

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

