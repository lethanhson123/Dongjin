namespace MESService.Implement
{
    public class E04Service : BaseService<torderlist, ItorderlistRepository>
    , IE04Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public E04Service(ItorderlistRepository torderlistRepository

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

