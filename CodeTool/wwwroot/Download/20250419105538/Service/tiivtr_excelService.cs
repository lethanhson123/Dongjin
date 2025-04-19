namespace MESService.Implement
{
    public class tiivtr_excelService : BaseService<tiivtr_excel, Itiivtr_excelRepository>
    , Itiivtr_excelService
    {
    private readonly Itiivtr_excelRepository _tiivtr_excelRepository;
    public tiivtr_excelService(Itiivtr_excelRepository tiivtr_excelRepository) : base(tiivtr_excelRepository)
    {
    _tiivtr_excelRepository = tiivtr_excelRepository;
    }
    public override void Initialization(tiivtr_excel model)
    {
    BaseInitialization(model);
    }
    public override async Task<tiivtr_excel> SaveAsync(tiivtr_excel model)
    {
    try
    {
    if (model.IV_IDX > 0)
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
    public virtual async Task<tiivtr_excel> Sync(tiivtr_excel model)
    {
    return model;
    }
    }
    }

