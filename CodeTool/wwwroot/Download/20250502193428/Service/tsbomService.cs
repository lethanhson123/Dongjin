namespace MESService.Implement
{
    public class tsbomService : BaseService<tsbom, ItsbomRepository>
    , ItsbomService
    {
    private readonly ItsbomRepository _tsbomRepository;
    public tsbomService(ItsbomRepository tsbomRepository) : base(tsbomRepository)
    {
    _tsbomRepository = tsbomRepository;
    }
    public override void Initialization(tsbom model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsbom> SaveAsync(tsbom model)
    {
    try
    {
    if (model.BOM_IDX > 0)
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
    public virtual async Task<tsbom> Sync(tsbom model)
    {
    return model;
    }
    }
    }

