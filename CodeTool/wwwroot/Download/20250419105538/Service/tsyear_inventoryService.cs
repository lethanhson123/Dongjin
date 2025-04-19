namespace MESService.Implement
{
    public class tsyear_inventoryService : BaseService<tsyear_inventory, Itsyear_inventoryRepository>
    , Itsyear_inventoryService
    {
    private readonly Itsyear_inventoryRepository _tsyear_inventoryRepository;
    public tsyear_inventoryService(Itsyear_inventoryRepository tsyear_inventoryRepository) : base(tsyear_inventoryRepository)
    {
    _tsyear_inventoryRepository = tsyear_inventoryRepository;
    }
    public override void Initialization(tsyear_inventory model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsyear_inventory> SaveAsync(tsyear_inventory model)
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
    public virtual async Task<tsyear_inventory> Sync(tsyear_inventory model)
    {
    return model;
    }
    }
    }

