namespace MESService.Implement
{
    public class torder_bom_swService : BaseService<torder_bom_sw, Itorder_bom_swRepository>
    , Itorder_bom_swService
    {
    private readonly Itorder_bom_swRepository _torder_bom_swRepository;
    public torder_bom_swService(Itorder_bom_swRepository torder_bom_swRepository) : base(torder_bom_swRepository)
    {
    _torder_bom_swRepository = torder_bom_swRepository;
    }
    public override void Initialization(torder_bom_sw model)
    {
    BaseInitialization(model);
    }
    public override async Task<torder_bom_sw> SaveAsync(torder_bom_sw model)
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
    public virtual async Task<torder_bom_sw> Sync(torder_bom_sw model)
    {
    return model;
    }
    }
    }

