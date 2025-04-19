namespace MESService.Implement
{
    public class torder_lead_bom_spst_exclService : BaseService<torder_lead_bom_spst_excl, Itorder_lead_bom_spst_exclRepository>
    , Itorder_lead_bom_spst_exclService
    {
    private readonly Itorder_lead_bom_spst_exclRepository _torder_lead_bom_spst_exclRepository;
    public torder_lead_bom_spst_exclService(Itorder_lead_bom_spst_exclRepository torder_lead_bom_spst_exclRepository) : base(torder_lead_bom_spst_exclRepository)
    {
    _torder_lead_bom_spst_exclRepository = torder_lead_bom_spst_exclRepository;
    }
    public override void Initialization(torder_lead_bom_spst_excl model)
    {
    BaseInitialization(model);
    }
    public override async Task<torder_lead_bom_spst_excl> SaveAsync(torder_lead_bom_spst_excl model)
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
    public virtual async Task<torder_lead_bom_spst_excl> Sync(torder_lead_bom_spst_excl model)
    {
    return model;
    }
    }
    }

