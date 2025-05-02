namespace MESService.Implement
{
    public class tdpdmtim_locService : BaseService<tdpdmtim_loc, Itdpdmtim_locRepository>
    , Itdpdmtim_locService
    {
    private readonly Itdpdmtim_locRepository _tdpdmtim_locRepository;
    public tdpdmtim_locService(Itdpdmtim_locRepository tdpdmtim_locRepository) : base(tdpdmtim_locRepository)
    {
    _tdpdmtim_locRepository = tdpdmtim_locRepository;
    }
    public override void Initialization(tdpdmtim_loc model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdpdmtim_loc> SaveAsync(tdpdmtim_loc model)
    {
    try
    {
    if (model.TDLOC_IDX > 0)
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
    public virtual async Task<tdpdmtim_loc> Sync(tdpdmtim_loc model)
    {
    return model;
    }
    }
    }

