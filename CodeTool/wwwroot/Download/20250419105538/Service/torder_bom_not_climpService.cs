namespace MESService.Implement
{
    public class torder_bom_not_climpService : BaseService<torder_bom_not_climp, Itorder_bom_not_climpRepository>
    , Itorder_bom_not_climpService
    {
    private readonly Itorder_bom_not_climpRepository _torder_bom_not_climpRepository;
    public torder_bom_not_climpService(Itorder_bom_not_climpRepository torder_bom_not_climpRepository) : base(torder_bom_not_climpRepository)
    {
    _torder_bom_not_climpRepository = torder_bom_not_climpRepository;
    }
    public override void Initialization(torder_bom_not_climp model)
    {
    BaseInitialization(model);
    }
    public override async Task<torder_bom_not_climp> SaveAsync(torder_bom_not_climp model)
    {
    try
    {
    if (model.CLIMP_IDX > 0)
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
    public virtual async Task<torder_bom_not_climp> Sync(torder_bom_not_climp model)
    {
    return model;
    }
    }
    }

