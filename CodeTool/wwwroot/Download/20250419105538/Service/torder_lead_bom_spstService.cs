namespace MESService.Implement
{
    public class torder_lead_bom_spstService : BaseService<torder_lead_bom_spst, Itorder_lead_bom_spstRepository>
    , Itorder_lead_bom_spstService
    {
    private readonly Itorder_lead_bom_spstRepository _torder_lead_bom_spstRepository;
    public torder_lead_bom_spstService(Itorder_lead_bom_spstRepository torder_lead_bom_spstRepository) : base(torder_lead_bom_spstRepository)
    {
    _torder_lead_bom_spstRepository = torder_lead_bom_spstRepository;
    }
    public override void Initialization(torder_lead_bom_spst model)
    {
    BaseInitialization(model);
    }
    public override async Task<torder_lead_bom_spst> SaveAsync(torder_lead_bom_spst model)
    {
    try
    {
    if (model.SPST_IDX > 0)
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
    public virtual async Task<torder_lead_bom_spst> Sync(torder_lead_bom_spst model)
    {
    return model;
    }
    }
    }

