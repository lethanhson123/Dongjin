namespace MESService.Implement
{
    public class tsnon_oper_andonService : BaseService<tsnon_oper_andon, Itsnon_oper_andonRepository>
    , Itsnon_oper_andonService
    {
    private readonly Itsnon_oper_andonRepository _tsnon_oper_andonRepository;
    public tsnon_oper_andonService(Itsnon_oper_andonRepository tsnon_oper_andonRepository) : base(tsnon_oper_andonRepository)
    {
    _tsnon_oper_andonRepository = tsnon_oper_andonRepository;
    }
    public override void Initialization(tsnon_oper_andon model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsnon_oper_andon> SaveAsync(tsnon_oper_andon model)
    {
    try
    {
    if (model.TSNON_OPER_MITOR_IDX > 0)
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
    public virtual async Task<tsnon_oper_andon> Sync(tsnon_oper_andon model)
    {
    return model;
    }
    }
    }

