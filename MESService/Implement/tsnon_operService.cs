namespace MESService.Implement
{
    public class tsnon_operService : BaseService<tsnon_oper, Itsnon_operRepository>
    , Itsnon_operService
    {
    private readonly Itsnon_operRepository _tsnon_operRepository;
    public tsnon_operService(Itsnon_operRepository tsnon_operRepository) : base(tsnon_operRepository)
    {
    _tsnon_operRepository = tsnon_operRepository;
    }
    public override void Initialization(tsnon_oper model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsnon_oper> SaveAsync(tsnon_oper model)
    {
    try
    {
    if (model.TSNON_OPER_IDX > 0)
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
    public virtual async Task<tsnon_oper> Sync(tsnon_oper model)
    {
    return model;
    }
    }
    }

