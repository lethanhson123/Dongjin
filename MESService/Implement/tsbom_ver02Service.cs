namespace MESService.Implement
{
    public class tsbom_ver02Service : BaseService<tsbom_ver02, Itsbom_ver02Repository>
    , Itsbom_ver02Service
    {
    private readonly Itsbom_ver02Repository _tsbom_ver02Repository;
    public tsbom_ver02Service(Itsbom_ver02Repository tsbom_ver02Repository) : base(tsbom_ver02Repository)
    {
    _tsbom_ver02Repository = tsbom_ver02Repository;
    }
    public override void Initialization(tsbom_ver02 model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsbom_ver02> SaveAsync(tsbom_ver02 model)
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
    public virtual async Task<tsbom_ver02> Sync(tsbom_ver02 model)
    {
    return model;
    }
    }
    }

