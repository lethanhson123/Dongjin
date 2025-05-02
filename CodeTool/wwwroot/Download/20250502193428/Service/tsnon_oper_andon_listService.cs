namespace MESService.Implement
{
    public class tsnon_oper_andon_listService : BaseService<tsnon_oper_andon_list, Itsnon_oper_andon_listRepository>
    , Itsnon_oper_andon_listService
    {
    private readonly Itsnon_oper_andon_listRepository _tsnon_oper_andon_listRepository;
    public tsnon_oper_andon_listService(Itsnon_oper_andon_listRepository tsnon_oper_andon_listRepository) : base(tsnon_oper_andon_listRepository)
    {
    _tsnon_oper_andon_listRepository = tsnon_oper_andon_listRepository;
    }
    public override void Initialization(tsnon_oper_andon_list model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsnon_oper_andon_list> SaveAsync(tsnon_oper_andon_list model)
    {
    try
    {
    if (model.TSNON_OPER_MITOR_IDX > 0)
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
    public virtual async Task<tsnon_oper_andon_list> Sync(tsnon_oper_andon_list model)
    {
    return model;
    }
    }
    }

