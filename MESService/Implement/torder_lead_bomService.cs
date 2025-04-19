namespace MESService.Implement
{
    public class torder_lead_bomService : BaseService<torder_lead_bom, Itorder_lead_bomRepository>
    , Itorder_lead_bomService
    {
    private readonly Itorder_lead_bomRepository _torder_lead_bomRepository;
    public torder_lead_bomService(Itorder_lead_bomRepository torder_lead_bomRepository) : base(torder_lead_bomRepository)
    {
    _torder_lead_bomRepository = torder_lead_bomRepository;
    }
    public override void Initialization(torder_lead_bom model)
    {
    BaseInitialization(model);
    }
    public override async Task<torder_lead_bom> SaveAsync(torder_lead_bom model)
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
    public virtual async Task<torder_lead_bom> Sync(torder_lead_bom model)
    {
    return model;
    }
    }
    }

