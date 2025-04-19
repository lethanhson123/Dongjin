namespace MESService.Implement
{
    public class kr_tdpdmtimService : BaseService<kr_tdpdmtim, Ikr_tdpdmtimRepository>
    , Ikr_tdpdmtimService
    {
    private readonly Ikr_tdpdmtimRepository _kr_tdpdmtimRepository;
    public kr_tdpdmtimService(Ikr_tdpdmtimRepository kr_tdpdmtimRepository) : base(kr_tdpdmtimRepository)
    {
    _kr_tdpdmtimRepository = kr_tdpdmtimRepository;
    }
    public override void Initialization(kr_tdpdmtim model)
    {
    BaseInitialization(model);
    }
    public override async Task<kr_tdpdmtim> SaveAsync(kr_tdpdmtim model)
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
    public virtual async Task<kr_tdpdmtim> Sync(kr_tdpdmtim model)
    {
    return model;
    }
    }
    }

