namespace MESService.Implement
{
    public class G02Service : BaseService<torderlist, ItorderlistRepository>
    , IG02Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public G02Service(ItorderlistRepository torderlistRepository

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

