namespace MESService.Implement
{
    public class torder_bom_lpService : BaseService<torder_bom_lp, Itorder_bom_lpRepository>
    , Itorder_bom_lpService
    {
    private readonly Itorder_bom_lpRepository _torder_bom_lpRepository;
    public torder_bom_lpService(Itorder_bom_lpRepository torder_bom_lpRepository) : base(torder_bom_lpRepository)
    {
    _torder_bom_lpRepository = torder_bom_lpRepository;
    }
    public override void Initialization(torder_bom_lp model)
    {
    BaseInitialization(model);
    }
    public override async Task<torder_bom_lp> SaveAsync(torder_bom_lp model)
    {
    try
    {
    if (model.TORDER_BOM_IDX > 0)
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
    public virtual async Task<torder_bom_lp> Sync(torder_bom_lp model)
    {
    return model;
    }
    }
    }

