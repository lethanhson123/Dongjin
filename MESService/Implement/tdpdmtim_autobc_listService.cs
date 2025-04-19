namespace MESService.Implement
{
    public class tdpdmtim_autobc_listService : BaseService<tdpdmtim_autobc_list, Itdpdmtim_autobc_listRepository>
    , Itdpdmtim_autobc_listService
    {
    private readonly Itdpdmtim_autobc_listRepository _tdpdmtim_autobc_listRepository;
    public tdpdmtim_autobc_listService(Itdpdmtim_autobc_listRepository tdpdmtim_autobc_listRepository) : base(tdpdmtim_autobc_listRepository)
    {
    _tdpdmtim_autobc_listRepository = tdpdmtim_autobc_listRepository;
    }
    public override void Initialization(tdpdmtim_autobc_list model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdpdmtim_autobc_list> SaveAsync(tdpdmtim_autobc_list model)
    {
    try
    {
    if (model.PDMTINABC_IDX > 0)
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
    public virtual async Task<tdpdmtim_autobc_list> Sync(tdpdmtim_autobc_list model)
    {
    return model;
    }
    }
    }

