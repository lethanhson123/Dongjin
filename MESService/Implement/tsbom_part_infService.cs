namespace MESService.Implement
{
    public class tsbom_part_infService : BaseService<tsbom_part_inf, Itsbom_part_infRepository>
    , Itsbom_part_infService
    {
    private readonly Itsbom_part_infRepository _tsbom_part_infRepository;
    public tsbom_part_infService(Itsbom_part_infRepository tsbom_part_infRepository) : base(tsbom_part_infRepository)
    {
    _tsbom_part_infRepository = tsbom_part_infRepository;
    }
    public override void Initialization(tsbom_part_inf model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsbom_part_inf> SaveAsync(tsbom_part_inf model)
    {
    try
    {
    if (model.INF_BOM_IDX > 0)
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
    public virtual async Task<tsbom_part_inf> Sync(tsbom_part_inf model)
    {
    return model;
    }
    }
    }

