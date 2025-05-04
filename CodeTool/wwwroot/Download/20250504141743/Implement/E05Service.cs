namespace MESService.Implement
{
    public class E05Service : BaseService<torderlist, ItorderlistRepository>
    , IE05Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public E05Service(ItorderlistRepository torderlistRepository

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

