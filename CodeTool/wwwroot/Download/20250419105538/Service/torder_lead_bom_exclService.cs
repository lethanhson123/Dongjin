namespace MESService.Implement
{
    public class torder_lead_bom_exclService : BaseService<torder_lead_bom_excl, Itorder_lead_bom_exclRepository>
    , Itorder_lead_bom_exclService
    {
    private readonly Itorder_lead_bom_exclRepository _torder_lead_bom_exclRepository;
    public torder_lead_bom_exclService(Itorder_lead_bom_exclRepository torder_lead_bom_exclRepository) : base(torder_lead_bom_exclRepository)
    {
    _torder_lead_bom_exclRepository = torder_lead_bom_exclRepository;
    }
    public override void Initialization(torder_lead_bom_excl model)
    {
    BaseInitialization(model);
    }
    public override async Task<torder_lead_bom_excl> SaveAsync(torder_lead_bom_excl model)
    {
    try
    {
    if (model.LEAD_INDEX > 0)
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
    public virtual async Task<torder_lead_bom_excl> Sync(torder_lead_bom_excl model)
    {
    return model;
    }
    }
    }

