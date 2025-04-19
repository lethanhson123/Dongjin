namespace MESService.Implement
{
    public class tdpdmtim_histService : BaseService<tdpdmtim_hist, Itdpdmtim_histRepository>
    , Itdpdmtim_histService
    {
    private readonly Itdpdmtim_histRepository _tdpdmtim_histRepository;
    public tdpdmtim_histService(Itdpdmtim_histRepository tdpdmtim_histRepository) : base(tdpdmtim_histRepository)
    {
    _tdpdmtim_histRepository = tdpdmtim_histRepository;
    }
    public override void Initialization(tdpdmtim_hist model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdpdmtim_hist> SaveAsync(tdpdmtim_hist model)
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
    public virtual async Task<tdpdmtim_hist> Sync(tdpdmtim_hist model)
    {
    return model;
    }
    }
    }

