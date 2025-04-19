namespace MESService.Implement
{
    public class tdpdmtimService : BaseService<tdpdmtim, ItdpdmtimRepository>
    , ItdpdmtimService
    {
    private readonly ItdpdmtimRepository _tdpdmtimRepository;
    public tdpdmtimService(ItdpdmtimRepository tdpdmtimRepository) : base(tdpdmtimRepository)
    {
    _tdpdmtimRepository = tdpdmtimRepository;
    }
    public override void Initialization(tdpdmtim model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdpdmtim> SaveAsync(tdpdmtim model)
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
    public virtual async Task<tdpdmtim> Sync(tdpdmtim model)
    {
    return model;
    }
    }
    }

