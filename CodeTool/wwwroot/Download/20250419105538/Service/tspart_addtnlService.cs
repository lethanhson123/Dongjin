namespace MESService.Implement
{
    public class tspart_addtnlService : BaseService<tspart_addtnl, Itspart_addtnlRepository>
    , Itspart_addtnlService
    {
    private readonly Itspart_addtnlRepository _tspart_addtnlRepository;
    public tspart_addtnlService(Itspart_addtnlRepository tspart_addtnlRepository) : base(tspart_addtnlRepository)
    {
    _tspart_addtnlRepository = tspart_addtnlRepository;
    }
    public override void Initialization(tspart_addtnl model)
    {
    BaseInitialization(model);
    }
    public override async Task<tspart_addtnl> SaveAsync(tspart_addtnl model)
    {
    try
    {
    if (model.PART_ADDTNL_IDX > 0)
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
    public virtual async Task<tspart_addtnl> Sync(tspart_addtnl model)
    {
    return model;
    }
    }
    }

