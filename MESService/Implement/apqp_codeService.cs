namespace MESService.Implement
{
    public class apqp_codeService : BaseService<apqp_code, Iapqp_codeRepository>
    , Iapqp_codeService
    {
    private readonly Iapqp_codeRepository _apqp_codeRepository;
    public apqp_codeService(Iapqp_codeRepository apqp_codeRepository) : base(apqp_codeRepository)
    {
    _apqp_codeRepository = apqp_codeRepository;
    }
    public override void Initialization(apqp_code model)
    {
    BaseInitialization(model);
    }
    public override async Task<apqp_code> SaveAsync(apqp_code model)
    {
    try
    {
    if (model.CD_IDX > 0)
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
    public virtual async Task<apqp_code> Sync(apqp_code model)
    {
    return model;
    }
    }
    }

