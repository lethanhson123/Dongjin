namespace MESService.Implement
{
    public class tiivtr_lead_fgService : BaseService<tiivtr_lead_fg, Itiivtr_lead_fgRepository>
    , Itiivtr_lead_fgService
    {
    private readonly Itiivtr_lead_fgRepository _tiivtr_lead_fgRepository;
    public tiivtr_lead_fgService(Itiivtr_lead_fgRepository tiivtr_lead_fgRepository) : base(tiivtr_lead_fgRepository)
    {
    _tiivtr_lead_fgRepository = tiivtr_lead_fgRepository;
    }
    public override void Initialization(tiivtr_lead_fg model)
    {
    BaseInitialization(model);
    }
    public override async Task<tiivtr_lead_fg> SaveAsync(tiivtr_lead_fg model)
    {
    try
    {
    if (model.IV_IDX > 0)
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
    public virtual async Task<tiivtr_lead_fg> Sync(tiivtr_lead_fg model)
    {
    return model;
    }
    }
    }

