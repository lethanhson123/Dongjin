namespace MESService.Implement
{
    public class torder_spcService : BaseService<torder_spc, Itorder_spcRepository>
    , Itorder_spcService
    {
    private readonly Itorder_spcRepository _torder_spcRepository;
    public torder_spcService(Itorder_spcRepository torder_spcRepository) : base(torder_spcRepository)
    {
    _torder_spcRepository = torder_spcRepository;
    }
    public override void Initialization(torder_spc model)
    {
    BaseInitialization(model);
    }
    public override async Task<torder_spc> SaveAsync(torder_spc model)
    {
    try
    {
    if (model.SPC_IDX > 0)
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
    public virtual async Task<torder_spc> Sync(torder_spc model)
    {
    return model;
    }
    }
    }

