namespace MESService.Implement
{
    public class tdpdotplmuService : BaseService<tdpdotplmu, ItdpdotplmuRepository>
    , ItdpdotplmuService
    {
    private readonly ItdpdotplmuRepository _tdpdotplmuRepository;
    public tdpdotplmuService(ItdpdotplmuRepository tdpdotplmuRepository) : base(tdpdotplmuRepository)
    {
    _tdpdotplmuRepository = tdpdotplmuRepository;
    }
    public override void Initialization(tdpdotplmu model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdpdotplmu> SaveAsync(tdpdotplmu model)
    {
    try
    {
    if (model.TDPDOTPLMU_IDX > 0)
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
    public virtual async Task<tdpdotplmu> Sync(tdpdotplmu model)
    {
    return model;
    }
    }
    }

