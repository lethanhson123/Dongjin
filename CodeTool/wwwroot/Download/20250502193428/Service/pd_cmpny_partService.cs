namespace MESService.Implement
{
    public class pd_cmpny_partService : BaseService<pd_cmpny_part, Ipd_cmpny_partRepository>
    , Ipd_cmpny_partService
    {
    private readonly Ipd_cmpny_partRepository _pd_cmpny_partRepository;
    public pd_cmpny_partService(Ipd_cmpny_partRepository pd_cmpny_partRepository) : base(pd_cmpny_partRepository)
    {
    _pd_cmpny_partRepository = pd_cmpny_partRepository;
    }
    public override void Initialization(pd_cmpny_part model)
    {
    BaseInitialization(model);
    }
    public override async Task<pd_cmpny_part> SaveAsync(pd_cmpny_part model)
    {
    try
    {
    if (model.PD_CMPNY_PART_IDX > 0)
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
    public virtual async Task<pd_cmpny_part> Sync(pd_cmpny_part model)
    {
    return model;
    }
    }
    }

