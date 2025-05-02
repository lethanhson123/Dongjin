namespace MESService.Implement
{
    public class ttoolmaster2Service : BaseService<ttoolmaster2, Ittoolmaster2Repository>
    , Ittoolmaster2Service
    {
    private readonly Ittoolmaster2Repository _ttoolmaster2Repository;
    public ttoolmaster2Service(Ittoolmaster2Repository ttoolmaster2Repository) : base(ttoolmaster2Repository)
    {
    _ttoolmaster2Repository = ttoolmaster2Repository;
    }
    public override void Initialization(ttoolmaster2 model)
    {
    BaseInitialization(model);
    }
    public override async Task<ttoolmaster2> SaveAsync(ttoolmaster2 model)
    {
    try
    {
    if (model.TOOLMASTER_IDX > 0)
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
    public virtual async Task<ttoolmaster2> Sync(ttoolmaster2 model)
    {
    return model;
    }
    }
    }

