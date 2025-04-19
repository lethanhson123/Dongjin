namespace MESService.Implement
{
    public class kr_tdpdmtim_tmpService : BaseService<kr_tdpdmtim_tmp, Ikr_tdpdmtim_tmpRepository>
    , Ikr_tdpdmtim_tmpService
    {
    private readonly Ikr_tdpdmtim_tmpRepository _kr_tdpdmtim_tmpRepository;
    public kr_tdpdmtim_tmpService(Ikr_tdpdmtim_tmpRepository kr_tdpdmtim_tmpRepository) : base(kr_tdpdmtim_tmpRepository)
    {
    _kr_tdpdmtim_tmpRepository = kr_tdpdmtim_tmpRepository;
    }
    public override void Initialization(kr_tdpdmtim_tmp model)
    {
    BaseInitialization(model);
    }
    public override async Task<kr_tdpdmtim_tmp> SaveAsync(kr_tdpdmtim_tmp model)
    {
    try
    {
    if (model.KR_TDPDMTIN_IDX > 0)
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
    public virtual async Task<kr_tdpdmtim_tmp> Sync(kr_tdpdmtim_tmp model)
    {
    return model;
    }
    }
    }

