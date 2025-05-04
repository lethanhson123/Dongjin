namespace MESService.Implement
{
    public class E03Service : BaseService<torderlist, ItorderlistRepository>
    , IE03Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public E03Service(ItorderlistRepository torderlistRepository

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

