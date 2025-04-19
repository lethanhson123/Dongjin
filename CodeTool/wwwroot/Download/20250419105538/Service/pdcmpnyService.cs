namespace MESService.Implement
{
    public class pdcmpnyService : BaseService<pdcmpny, IpdcmpnyRepository>
    , IpdcmpnyService
    {
    private readonly IpdcmpnyRepository _pdcmpnyRepository;
    public pdcmpnyService(IpdcmpnyRepository pdcmpnyRepository) : base(pdcmpnyRepository)
    {
    _pdcmpnyRepository = pdcmpnyRepository;
    }
    public override void Initialization(pdcmpny model)
    {
    BaseInitialization(model);
    }
    public override async Task<pdcmpny> SaveAsync(pdcmpny model)
    {
    try
    {
    if (model.CMPNY_IDX > 0)
    {
    await UpdateAsync(model);
    }
    else
    {
    await AddAsync(model);
    }
    await Sync(model);
    }
    catch (Exception ex)
    {
    string mes = ex.Message;
    }
    return model;
    }
    public virtual async Task<pdcmpny> Sync(pdcmpny model)
    {
    return model;
    }
    }
    }

