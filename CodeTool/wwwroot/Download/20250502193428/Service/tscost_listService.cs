namespace MESService.Implement
{
    public class tscost_listService : BaseService<tscost_list, Itscost_listRepository>
    , Itscost_listService
    {
    private readonly Itscost_listRepository _tscost_listRepository;
    public tscost_listService(Itscost_listRepository tscost_listRepository) : base(tscost_listRepository)
    {
    _tscost_listRepository = tscost_listRepository;
    }
    public override void Initialization(tscost_list model)
    {
    BaseInitialization(model);
    }
    public override async Task<tscost_list> SaveAsync(tscost_list model)
    {
    try
    {
    if (model.TSCOST_IDX > 0)
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
    public virtual async Task<tscost_list> Sync(tscost_list model)
    {
    return model;
    }
    }
    }

