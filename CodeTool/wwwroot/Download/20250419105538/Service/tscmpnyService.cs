namespace MESService.Implement
{
    public class tscmpnyService : BaseService<tscmpny, ItscmpnyRepository>
    , ItscmpnyService
    {
    private readonly ItscmpnyRepository _tscmpnyRepository;
    public tscmpnyService(ItscmpnyRepository tscmpnyRepository) : base(tscmpnyRepository)
    {
    _tscmpnyRepository = tscmpnyRepository;
    }
    public override void Initialization(tscmpny model)
    {
    BaseInitialization(model);
    }
    public override async Task<tscmpny> SaveAsync(tscmpny model)
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
    public virtual async Task<tscmpny> Sync(tscmpny model)
    {
    return model;
    }
    }
    }

