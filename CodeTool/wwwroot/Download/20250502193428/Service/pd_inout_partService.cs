namespace MESService.Implement
{
    public class pd_inout_partService : BaseService<pd_inout_part, Ipd_inout_partRepository>
    , Ipd_inout_partService
    {
    private readonly Ipd_inout_partRepository _pd_inout_partRepository;
    public pd_inout_partService(Ipd_inout_partRepository pd_inout_partRepository) : base(pd_inout_partRepository)
    {
    _pd_inout_partRepository = pd_inout_partRepository;
    }
    public override void Initialization(pd_inout_part model)
    {
    BaseInitialization(model);
    }
    public override async Task<pd_inout_part> SaveAsync(pd_inout_part model)
    {
    try
    {
    if (model.PD_INPUT_PART_IDX > 0)
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
    public virtual async Task<pd_inout_part> Sync(pd_inout_part model)
    {
    return model;
    }
    }
    }

