namespace MESService.Implement
{
    public class ttc_orderService : BaseService<ttc_order, Ittc_orderRepository>
    , Ittc_orderService
    {
    private readonly Ittc_orderRepository _ttc_orderRepository;
    public ttc_orderService(Ittc_orderRepository ttc_orderRepository) : base(ttc_orderRepository)
    {
    _ttc_orderRepository = ttc_orderRepository;
    }
    public override void Initialization(ttc_order model)
    {
    BaseInitialization(model);
    }
    public override async Task<ttc_order> SaveAsync(ttc_order model)
    {
    try
    {
    if (model.TTC_PO_INX > 0)
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
    public virtual async Task<ttc_order> Sync(ttc_order model)
    {
    return model;
    }
    }
    }

