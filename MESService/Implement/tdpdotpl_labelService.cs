namespace MESService.Implement
{
    public class tdpdotpl_labelService : BaseService<tdpdotpl_label, Itdpdotpl_labelRepository>
    , Itdpdotpl_labelService
    {
    private readonly Itdpdotpl_labelRepository _tdpdotpl_labelRepository;
    public tdpdotpl_labelService(Itdpdotpl_labelRepository tdpdotpl_labelRepository) : base(tdpdotpl_labelRepository)
    {
    _tdpdotpl_labelRepository = tdpdotpl_labelRepository;
    }
    public override void Initialization(tdpdotpl_label model)
    {
    BaseInitialization(model);
    }
    public override async Task<tdpdotpl_label> SaveAsync(tdpdotpl_label model)
    {
    try
    {
    if (model.PDOTPL_IDX > 0)
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
    public virtual async Task<tdpdotpl_label> Sync(tdpdotpl_label model)
    {
    return model;
    }
    }
    }

