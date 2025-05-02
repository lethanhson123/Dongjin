namespace MESService.Implement
{
    public class tsyear_inventory_histService : BaseService<tsyear_inventory_hist, Itsyear_inventory_histRepository>
    , Itsyear_inventory_histService
    {
    private readonly Itsyear_inventory_histRepository _tsyear_inventory_histRepository;
    public tsyear_inventory_histService(Itsyear_inventory_histRepository tsyear_inventory_histRepository) : base(tsyear_inventory_histRepository)
    {
    _tsyear_inventory_histRepository = tsyear_inventory_histRepository;
    }
    public override void Initialization(tsyear_inventory_hist model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsyear_inventory_hist> SaveAsync(tsyear_inventory_hist model)
    {
    try
    {
    if (model.TSYEAR_INV_IDX > 0)
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
    public virtual async Task<tsyear_inventory_hist> Sync(tsyear_inventory_hist model)
    {
    return model;
    }
    }
    }

