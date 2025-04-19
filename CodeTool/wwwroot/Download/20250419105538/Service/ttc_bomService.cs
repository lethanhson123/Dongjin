namespace MESService.Implement
{
    public class ttc_bomService : BaseService<ttc_bom, Ittc_bomRepository>
    , Ittc_bomService
    {
    private readonly Ittc_bomRepository _ttc_bomRepository;
    public ttc_bomService(Ittc_bomRepository ttc_bomRepository) : base(ttc_bomRepository)
    {
    _ttc_bomRepository = ttc_bomRepository;
    }
    public override void Initialization(ttc_bom model)
    {
    BaseInitialization(model);
    }
    public override async Task<ttc_bom> SaveAsync(ttc_bom model)
    {
    try
    {
    if (model.TTC_BOM_IDX > 0)
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
    public virtual async Task<ttc_bom> Sync(ttc_bom model)
    {
    return model;
    }
    }
    }

