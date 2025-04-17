namespace MESService.Implement
{
    public class help_categoryService : BaseService<help_category, Ihelp_categoryRepository>
    , Ihelp_categoryService
    {
    private readonly Ihelp_categoryRepository _help_categoryRepository;
    public help_categoryService(Ihelp_categoryRepository help_categoryRepository) : base(help_categoryRepository)
    {
    _help_categoryRepository = help_categoryRepository;
    }
    public override void Initialization(help_category model)
    {
    BaseInitialization(model);
    }
    public override async Task<help_category> SaveAsync(help_category model)
    {
    try
    {
    if (model.help_category_id > 0)
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
    public virtual async Task<help_category> Sync(help_category model)
    {
    return model;
    }
    }
    }

