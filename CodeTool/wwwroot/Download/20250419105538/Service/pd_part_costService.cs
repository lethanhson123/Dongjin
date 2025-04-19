namespace MESService.Implement
{
    public class pd_part_costService : BaseService<pd_part_cost, Ipd_part_costRepository>
    , Ipd_part_costService
    {
    private readonly Ipd_part_costRepository _pd_part_costRepository;
    public pd_part_costService(Ipd_part_costRepository pd_part_costRepository) : base(pd_part_costRepository)
    {
    _pd_part_costRepository = pd_part_costRepository;
    }
    public override void Initialization(pd_part_cost model)
    {
    BaseInitialization(model);
    }
    public override async Task<pd_part_cost> SaveAsync(pd_part_cost model)
    {
    try
    {
    if (model.PDCOST_IDX > 0)
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
    public virtual async Task<pd_part_cost> Sync(pd_part_cost model)
    {
    return model;
    }
    }
    }

