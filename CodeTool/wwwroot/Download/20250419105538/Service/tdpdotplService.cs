namespace MESService.Implement
{
    public class tdpdotplService : BaseService<tdpdotpl, ItdpdotplRepository>
    , ItdpdotplService
    {
    private readonly ItdpdotplRepository _tdpdotplRepository;
    public tdpdotplService(ItdpdotplRepository tdpdotplRepository) : base(tdpdotplRepository)
    {
    _tdpdotplRepository = tdpdotplRepository;
    }
    public override void Initialization(tdpdotpl model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdpdotpl> SaveAsync(tdpdotpl model)
    {
    try
    {
    if (model.PDOTPL_IDX > 0)
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
    public virtual async Task<tdpdotpl> Sync(tdpdotpl model)
    {
    return model;
    }
    }
    }

