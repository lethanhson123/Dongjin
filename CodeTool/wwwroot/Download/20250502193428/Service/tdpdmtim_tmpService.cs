namespace MESService.Implement
{
    public class tdpdmtim_tmpService : BaseService<tdpdmtim_tmp, Itdpdmtim_tmpRepository>
    , Itdpdmtim_tmpService
    {
    private readonly Itdpdmtim_tmpRepository _tdpdmtim_tmpRepository;
    public tdpdmtim_tmpService(Itdpdmtim_tmpRepository tdpdmtim_tmpRepository) : base(tdpdmtim_tmpRepository)
    {
    _tdpdmtim_tmpRepository = tdpdmtim_tmpRepository;
    }
    public override void Initialization(tdpdmtim_tmp model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdpdmtim_tmp> SaveAsync(tdpdmtim_tmp model)
    {
    try
    {
    if (model.PDTMP_IDX > 0)
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
    public virtual async Task<tdpdmtim_tmp> Sync(tdpdmtim_tmp model)
    {
    return model;
    }
    }
    }

