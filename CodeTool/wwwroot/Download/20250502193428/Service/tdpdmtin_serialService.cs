namespace MESService.Implement
{
    public class tdpdmtin_serialService : BaseService<tdpdmtin_serial, Itdpdmtin_serialRepository>
    , Itdpdmtin_serialService
    {
    private readonly Itdpdmtin_serialRepository _tdpdmtin_serialRepository;
    public tdpdmtin_serialService(Itdpdmtin_serialRepository tdpdmtin_serialRepository) : base(tdpdmtin_serialRepository)
    {
    _tdpdmtin_serialRepository = tdpdmtin_serialRepository;
    }
    public override void Initialization(tdpdmtin_serial model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdpdmtin_serial> SaveAsync(tdpdmtin_serial model)
    {
    try
    {
    if (model.TDPDMTIN_SERIAL_IDX > 0)
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
    public virtual async Task<tdpdmtin_serial> Sync(tdpdmtin_serial model)
    {
    return model;
    }
    }
    }

