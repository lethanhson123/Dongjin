namespace MESService.Implement
{
    public class tdpdmtim_reworkService : BaseService<tdpdmtim_rework, Itdpdmtim_reworkRepository>
    , Itdpdmtim_reworkService
    {
    private readonly Itdpdmtim_reworkRepository _tdpdmtim_reworkRepository;
    public tdpdmtim_reworkService(Itdpdmtim_reworkRepository tdpdmtim_reworkRepository) : base(tdpdmtim_reworkRepository)
    {
    _tdpdmtim_reworkRepository = tdpdmtim_reworkRepository;
    }
    public override void Initialization(tdpdmtim_rework model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdpdmtim_rework> SaveAsync(tdpdmtim_rework model)
    {
    try
    {
    if (model.PDMTIN_IDX > 0)
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
    public virtual async Task<tdpdmtim_rework> Sync(tdpdmtim_rework model)
    {
    return model;
    }
    }
    }

