namespace MESService.Implement
{
    public class torder_bom_spst2Service : BaseService<torder_bom_spst2, Itorder_bom_spst2Repository>
    , Itorder_bom_spst2Service
    {
    private readonly Itorder_bom_spst2Repository _torder_bom_spst2Repository;
    public torder_bom_spst2Service(Itorder_bom_spst2Repository torder_bom_spst2Repository) : base(torder_bom_spst2Repository)
    {
    _torder_bom_spst2Repository = torder_bom_spst2Repository;
    }
    public override void Initialization(torder_bom_spst2 model)
    {
    BaseInitialization(model);
    }
    public override async Task<torder_bom_spst2> SaveAsync(torder_bom_spst2 model)
    {
    try
    {
    if (model.TORDER_BOMSPST2_IDX > 0)
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
    public virtual async Task<torder_bom_spst2> Sync(torder_bom_spst2 model)
    {
    return model;
    }
    }
    }

