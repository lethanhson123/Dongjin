namespace MESService.Implement
{
    public class tdpdotpl_alocService : BaseService<tdpdotpl_aloc, Itdpdotpl_alocRepository>
    , Itdpdotpl_alocService
    {
    private readonly Itdpdotpl_alocRepository _tdpdotpl_alocRepository;
    public tdpdotpl_alocService(Itdpdotpl_alocRepository tdpdotpl_alocRepository) : base(tdpdotpl_alocRepository)
    {
    _tdpdotpl_alocRepository = tdpdotpl_alocRepository;
    }
    public override void Initialization(tdpdotpl_aloc model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdpdotpl_aloc> SaveAsync(tdpdotpl_aloc model)
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
    public virtual async Task<tdpdotpl_aloc> Sync(tdpdotpl_aloc model)
    {
    return model;
    }
    }
    }

