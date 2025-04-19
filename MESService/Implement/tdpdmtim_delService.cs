namespace MESService.Implement
{
    public class tdpdmtim_delService : BaseService<tdpdmtim_del, Itdpdmtim_delRepository>
    , Itdpdmtim_delService
    {
    private readonly Itdpdmtim_delRepository _tdpdmtim_delRepository;
    public tdpdmtim_delService(Itdpdmtim_delRepository tdpdmtim_delRepository) : base(tdpdmtim_delRepository)
    {
    _tdpdmtim_delRepository = tdpdmtim_delRepository;
    }
    public override void Initialization(tdpdmtim_del model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdpdmtim_del> SaveAsync(tdpdmtim_del model)
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
    public virtual async Task<tdpdmtim_del> Sync(tdpdmtim_del model)
    {
    return model;
    }
    }
    }

