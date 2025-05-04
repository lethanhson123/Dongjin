namespace MESService.Implement
{
    public class D12Service : BaseService<torderlist, ItorderlistRepository>
    , ID12Service
    {
    private readonly ItorderlistRepository _torderlistRepository;
    public D12Service(ItorderlistRepository torderlistRepository

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

