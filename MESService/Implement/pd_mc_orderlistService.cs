namespace MESService.Implement
{
    public class pd_mc_orderlistService : BaseService<pd_mc_orderlist, Ipd_mc_orderlistRepository>
    , Ipd_mc_orderlistService
    {
    private readonly Ipd_mc_orderlistRepository _pd_mc_orderlistRepository;
    public pd_mc_orderlistService(Ipd_mc_orderlistRepository pd_mc_orderlistRepository) : base(pd_mc_orderlistRepository)
    {
    _pd_mc_orderlistRepository = pd_mc_orderlistRepository;
    }
    public override void Initialization(pd_mc_orderlist model)
    {
    BaseInitialization(model);
    }
    public override async Task<pd_mc_orderlist> SaveAsync(pd_mc_orderlist model)
    {
    try
    {
    if (model.PD_MC_ORDER_IDX > 0)
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
    public virtual async Task<pd_mc_orderlist> Sync(pd_mc_orderlist model)
    {
    return model;
    }
    }
    }

