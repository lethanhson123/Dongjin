namespace MESService.Implement
{
    public class kr_tdpdmtim_tmp_outService : BaseService<kr_tdpdmtim_tmp_out, Ikr_tdpdmtim_tmp_outRepository>
    , Ikr_tdpdmtim_tmp_outService
    {
    private readonly Ikr_tdpdmtim_tmp_outRepository _kr_tdpdmtim_tmp_outRepository;
    public kr_tdpdmtim_tmp_outService(Ikr_tdpdmtim_tmp_outRepository kr_tdpdmtim_tmp_outRepository) : base(kr_tdpdmtim_tmp_outRepository)
    {
    _kr_tdpdmtim_tmp_outRepository = kr_tdpdmtim_tmp_outRepository;
    }
    public override void Initialization(kr_tdpdmtim_tmp_out model)
    {
    BaseInitialization(model);
    }
    public override async Task<kr_tdpdmtim_tmp_out> SaveAsync(kr_tdpdmtim_tmp_out model)
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
    public virtual async Task<kr_tdpdmtim_tmp_out> Sync(kr_tdpdmtim_tmp_out model)
    {
    return model;
    }
    }
    }

