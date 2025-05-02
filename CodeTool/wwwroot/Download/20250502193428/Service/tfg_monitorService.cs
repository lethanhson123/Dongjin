namespace MESService.Implement
{
    public class tfg_monitorService : BaseService<tfg_monitor, Itfg_monitorRepository>
    , Itfg_monitorService
    {
    private readonly Itfg_monitorRepository _tfg_monitorRepository;
    public tfg_monitorService(Itfg_monitorRepository tfg_monitorRepository) : base(tfg_monitorRepository)
    {
    _tfg_monitorRepository = tfg_monitorRepository;
    }
    public override void Initialization(tfg_monitor model)
    {
    BaseInitialization(model);
    }
    public override async Task<tfg_monitor> SaveAsync(tfg_monitor model)
    {
    try
    {
    if (model.TFG_MO_IDX > 0)
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
    public virtual async Task<tfg_monitor> Sync(tfg_monitor model)
    {
    return model;
    }
    }
    }

