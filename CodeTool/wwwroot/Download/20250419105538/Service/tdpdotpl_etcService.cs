namespace MESService.Implement
{
    public class tdpdotpl_etcService : BaseService<tdpdotpl_etc, Itdpdotpl_etcRepository>
    , Itdpdotpl_etcService
    {
    private readonly Itdpdotpl_etcRepository _tdpdotpl_etcRepository;
    public tdpdotpl_etcService(Itdpdotpl_etcRepository tdpdotpl_etcRepository) : base(tdpdotpl_etcRepository)
    {
    _tdpdotpl_etcRepository = tdpdotpl_etcRepository;
    }
    public override void Initialization(tdpdotpl_etc model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdpdotpl_etc> SaveAsync(tdpdotpl_etc model)
    {
    try
    {
    if (model.TDPDOTPL_ETC_IDX > 0)
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
    public virtual async Task<tdpdotpl_etc> Sync(tdpdotpl_etc model)
    {
    return model;
    }
    }
    }

