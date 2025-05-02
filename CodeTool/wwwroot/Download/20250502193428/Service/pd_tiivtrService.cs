namespace MESService.Implement
{
    public class pd_tiivtrService : BaseService<pd_tiivtr, Ipd_tiivtrRepository>
    , Ipd_tiivtrService
    {
    private readonly Ipd_tiivtrRepository _pd_tiivtrRepository;
    public pd_tiivtrService(Ipd_tiivtrRepository pd_tiivtrRepository) : base(pd_tiivtrRepository)
    {
    _pd_tiivtrRepository = pd_tiivtrRepository;
    }
    public override void Initialization(pd_tiivtr model)
    {
    BaseInitialization(model);
    }
    public override async Task<pd_tiivtr> SaveAsync(pd_tiivtr model)
    {
    try
    {
    if (model.IV_IDX > 0)
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
    public virtual async Task<pd_tiivtr> Sync(pd_tiivtr model)
    {
    return model;
    }
    }
    }

