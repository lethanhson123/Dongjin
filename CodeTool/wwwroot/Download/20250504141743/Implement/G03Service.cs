namespace MESService.Implement
{
    public class G03Service : BaseService<torderlist, ItorderlistRepository>
    , IG03Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public G03Service(ItorderlistRepository torderlistRepository

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

