namespace MESService.Implement
{
    public class Z04Service : BaseService<torderlist, ItorderlistRepository>
    , IZ04Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public Z04Service(ItorderlistRepository torderlistRepository

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

