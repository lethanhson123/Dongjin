namespace MESService.Implement
{
    public class torder_bom_spst1Service : BaseService<torder_bom_spst1, Itorder_bom_spst1Repository>
    , Itorder_bom_spst1Service
    {
    private readonly Itorder_bom_spst1Repository _torder_bom_spst1Repository;
    public torder_bom_spst1Service(Itorder_bom_spst1Repository torder_bom_spst1Repository) : base(torder_bom_spst1Repository)
    {
    _torder_bom_spst1Repository = torder_bom_spst1Repository;
    }
    public override void Initialization(torder_bom_spst1 model)
    {
    BaseInitialization(model);
    }
    public override async Task<torder_bom_spst1> SaveAsync(torder_bom_spst1 model)
    {
    try
    {
    if (model.TORDER_BOMSPST_IDX > 0)
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
    public virtual async Task<torder_bom_spst1> Sync(torder_bom_spst1 model)
    {
    return model;
    }
    }
    }

