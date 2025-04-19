namespace MESService.Implement
{
    public class tsbom_listService : BaseService<tsbom_list, Itsbom_listRepository>
    , Itsbom_listService
    {
    private readonly Itsbom_listRepository _tsbom_listRepository;
    public tsbom_listService(Itsbom_listRepository tsbom_listRepository) : base(tsbom_listRepository)
    {
    _tsbom_listRepository = tsbom_listRepository;
    }
    public override void Initialization(tsbom_list model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsbom_list> SaveAsync(tsbom_list model)
    {
    try
    {
    if (model.BOM_LIST_IDX > 0)
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
    public virtual async Task<tsbom_list> Sync(tsbom_list model)
    {
    return model;
    }
    }
    }

