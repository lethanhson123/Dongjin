namespace MESService.Implement
{
    public class tsbom_po_listService : BaseService<tsbom_po_list, Itsbom_po_listRepository>
    , Itsbom_po_listService
    {
    private readonly Itsbom_po_listRepository _tsbom_po_listRepository;
    public tsbom_po_listService(Itsbom_po_listRepository tsbom_po_listRepository) : base(tsbom_po_listRepository)
    {
    _tsbom_po_listRepository = tsbom_po_listRepository;
    }
    public override void Initialization(tsbom_po_list model)
    {
    BaseInitialization(model);
    }
    public override async Task<tsbom_po_list> SaveAsync(tsbom_po_list model)
    {
    try
    {
    if (model.BOM_PO_LIST_IDX > 0)
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
    public virtual async Task<tsbom_po_list> Sync(tsbom_po_list model)
    {
    return model;
    }
    }
    }

