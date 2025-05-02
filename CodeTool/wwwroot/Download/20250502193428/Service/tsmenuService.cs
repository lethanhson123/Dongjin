namespace MESService.Implement
{
    public class tsmenuService : BaseService<tsmenu, ItsmenuRepository>
    , ItsmenuService
    {
    private readonly ItsmenuRepository _tsmenuRepository;
    public tsmenuService(ItsmenuRepository tsmenuRepository) : base(tsmenuRepository)
    {
    _tsmenuRepository = tsmenuRepository;
    }
    public override void Initialization(tsmenu model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsmenu> SaveAsync(tsmenu model)
    {
    try
    {
    if (model.MENU_IDX > 0)
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
    public virtual async Task<tsmenu> Sync(tsmenu model)
    {
    return model;
    }
    }
    }

