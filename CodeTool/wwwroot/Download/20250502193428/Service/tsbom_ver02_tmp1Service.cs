namespace MESService.Implement
{
    public class tsbom_ver02_tmp1Service : BaseService<tsbom_ver02_tmp1, Itsbom_ver02_tmp1Repository>
    , Itsbom_ver02_tmp1Service
    {
    private readonly Itsbom_ver02_tmp1Repository _tsbom_ver02_tmp1Repository;
    public tsbom_ver02_tmp1Service(Itsbom_ver02_tmp1Repository tsbom_ver02_tmp1Repository) : base(tsbom_ver02_tmp1Repository)
    {
    _tsbom_ver02_tmp1Repository = tsbom_ver02_tmp1Repository;
    }
    public override void Initialization(tsbom_ver02_tmp1 model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsbom_ver02_tmp1> SaveAsync(tsbom_ver02_tmp1 model)
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
    public virtual async Task<tsbom_ver02_tmp1> Sync(tsbom_ver02_tmp1 model)
    {
    return model;
    }
    }
    }

