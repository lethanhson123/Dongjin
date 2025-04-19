namespace MESService.Implement
{
    public class pd_cmpny_costfileService : BaseService<pd_cmpny_costfile, Ipd_cmpny_costfileRepository>
    , Ipd_cmpny_costfileService
    {
    private readonly Ipd_cmpny_costfileRepository _pd_cmpny_costfileRepository;
    public pd_cmpny_costfileService(Ipd_cmpny_costfileRepository pd_cmpny_costfileRepository) : base(pd_cmpny_costfileRepository)
    {
    _pd_cmpny_costfileRepository = pd_cmpny_costfileRepository;
    }
    public override void Initialization(pd_cmpny_costfile model)
    {
    BaseInitialization(model);
    }
    public override async Task<pd_cmpny_costfile> SaveAsync(pd_cmpny_costfile model)
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
    public virtual async Task<pd_cmpny_costfile> Sync(pd_cmpny_costfile model)
    {
    return model;
    }
    }
    }

