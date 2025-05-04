namespace MESService.Implement
{
    public class G04Service : BaseService<torderlist, ItorderlistRepository>
    , IG04Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public G04Service(ItorderlistRepository torderlistRepository

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

