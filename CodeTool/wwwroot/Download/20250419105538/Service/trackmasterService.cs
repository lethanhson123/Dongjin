namespace MESService.Implement
{
    public class trackmasterService : BaseService<trackmaster, ItrackmasterRepository>
    , ItrackmasterService
    {
    private readonly ItrackmasterRepository _trackmasterRepository;
    public trackmasterService(ItrackmasterRepository trackmasterRepository) : base(trackmasterRepository)
    {
    _trackmasterRepository = trackmasterRepository;
    }
    public override void Initialization(trackmaster model)
    {
    BaseInitialization(model);
    }
    public override async Task<trackmaster> SaveAsync(trackmaster model)
    {
    try
    {
    if (model.RACK_IDX > 0)
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
    public virtual async Task<trackmaster> Sync(trackmaster model)
    {
    return model;
    }
    }
    }

