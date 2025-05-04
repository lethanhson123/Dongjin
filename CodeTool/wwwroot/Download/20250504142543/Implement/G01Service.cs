namespace MESService.Implement
{
    public class G01Service : BaseService<torderlist, ItorderlistRepository>
    , IG01Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public G01Service(ItorderlistRepository torderlistRepository

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

