namespace MESService.Implement
{
    public class E02Service : BaseService<torderlist, ItorderlistRepository>
    , IE02Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public E02Service(ItorderlistRepository torderlistRepository

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

