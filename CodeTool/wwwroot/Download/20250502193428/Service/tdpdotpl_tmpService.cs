namespace MESService.Implement
{
    public class tdpdotpl_tmpService : BaseService<tdpdotpl_tmp, Itdpdotpl_tmpRepository>
    , Itdpdotpl_tmpService
    {
    private readonly Itdpdotpl_tmpRepository _tdpdotpl_tmpRepository;
    public tdpdotpl_tmpService(Itdpdotpl_tmpRepository tdpdotpl_tmpRepository) : base(tdpdotpl_tmpRepository)
    {
    _tdpdotpl_tmpRepository = tdpdotpl_tmpRepository;
    }
    public override void Initialization(tdpdotpl_tmp model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdpdotpl_tmp> SaveAsync(tdpdotpl_tmp model)
    {
    try
    {
    if (model.PDOTPL_IDX > 0)
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
    public virtual async Task<tdpdotpl_tmp> Sync(tdpdotpl_tmp model)
    {
    return model;
    }
    }
    }

