namespace MESService.Implement
{
    public class tsnon_oper_mitorService : BaseService<tsnon_oper_mitor, Itsnon_oper_mitorRepository>
    , Itsnon_oper_mitorService
    {
    private readonly Itsnon_oper_mitorRepository _tsnon_oper_mitorRepository;
    public tsnon_oper_mitorService(Itsnon_oper_mitorRepository tsnon_oper_mitorRepository) : base(tsnon_oper_mitorRepository)
    {
    _tsnon_oper_mitorRepository = tsnon_oper_mitorRepository;
    }
    public override void Initialization(tsnon_oper_mitor model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsnon_oper_mitor> SaveAsync(tsnon_oper_mitor model)
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
    public virtual async Task<tsnon_oper_mitor> Sync(tsnon_oper_mitor model)
    {
    return model;
    }
    }
    }

