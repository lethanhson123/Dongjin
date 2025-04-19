namespace MESService.Implement
{
    public class torder_bomService : BaseService<torder_bom, Itorder_bomRepository>
    , Itorder_bomService
    {
    private readonly Itorder_bomRepository _torder_bomRepository;
    public torder_bomService(Itorder_bomRepository torder_bomRepository) : base(torder_bomRepository)
    {
    _torder_bomRepository = torder_bomRepository;
    }
    public override void Initialization(torder_bom model)
    {
    BaseInitialization(model);
    }
    public override async Task<torder_bom> SaveAsync(torder_bom model)
    {
    try
    {
    if (model.TORDER_BOM_IDX > 0)
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
    public virtual async Task<torder_bom> Sync(torder_bom model)
    {
    return model;
    }
    }
    }

