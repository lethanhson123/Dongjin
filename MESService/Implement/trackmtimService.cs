namespace MESService.Implement
{
    public class trackmtimService : BaseService<trackmtim, ItrackmtimRepository>
    , ItrackmtimService
    {
    private readonly ItrackmtimRepository _trackmtimRepository;
    public trackmtimService(ItrackmtimRepository trackmtimRepository) : base(trackmtimRepository)
    {
    _trackmtimRepository = trackmtimRepository;
    }
    public override void Initialization(trackmtim model)
    {
    BaseInitialization(model);
    }
    public override async Task<trackmtim> SaveAsync(trackmtim model)
    {
    try
    {
    if (model.TRACK_IDX > 0)
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
    public virtual async Task<trackmtim> Sync(trackmtim model)
    {
    return model;
    }
    }
    }

