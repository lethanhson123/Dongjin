namespace MESService.Implement
{
    public class zadmin_functionService : BaseService<zadmin_function, Izadmin_functionRepository>
    , Izadmin_functionService
    {
    private readonly Izadmin_functionRepository _zadmin_functionRepository;
    public zadmin_functionService(Izadmin_functionRepository zadmin_functionRepository) : base(zadmin_functionRepository)
    {
    _zadmin_functionRepository = zadmin_functionRepository;
    }
    public override void Initialization(zadmin_function model)
    {
    BaseInitialization(model);
    }
    public override async Task<zadmin_function> SaveAsync(zadmin_function model)
    {
    try
    {
    if (model.ZADMIN_FUNCTION_IDX > 0)
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
    public virtual async Task<zadmin_function> Sync(zadmin_function model)
    {
    return model;
    }
    }
    }

