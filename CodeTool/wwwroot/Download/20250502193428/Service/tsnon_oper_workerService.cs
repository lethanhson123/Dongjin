namespace MESService.Implement
{
    public class tsnon_oper_workerService : BaseService<tsnon_oper_worker, Itsnon_oper_workerRepository>
    , Itsnon_oper_workerService
    {
    private readonly Itsnon_oper_workerRepository _tsnon_oper_workerRepository;
    public tsnon_oper_workerService(Itsnon_oper_workerRepository tsnon_oper_workerRepository) : base(tsnon_oper_workerRepository)
    {
    _tsnon_oper_workerRepository = tsnon_oper_workerRepository;
    }
    public override void Initialization(tsnon_oper_worker model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsnon_oper_worker> SaveAsync(tsnon_oper_worker model)
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
    public virtual async Task<tsnon_oper_worker> Sync(tsnon_oper_worker model)
    {
    return model;
    }
    }
    }

