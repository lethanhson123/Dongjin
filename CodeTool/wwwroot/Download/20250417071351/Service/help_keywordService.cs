namespace MESService.Implement
{
    public class help_keywordService : BaseService<help_keyword, Ihelp_keywordRepository>
    , Ihelp_keywordService
    {
    private readonly Ihelp_keywordRepository _help_keywordRepository;
    public help_keywordService(Ihelp_keywordRepository help_keywordRepository) : base(help_keywordRepository)
    {
    _help_keywordRepository = help_keywordRepository;
    }
    public override void Initialization(help_keyword model)
    {
    BaseInitialization(model);
    }
    public override async Task<help_keyword> SaveAsync(help_keyword model)
    {
    try
    {
    if (model.help_keyword_id > 0)
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
    public virtual async Task<help_keyword> Sync(help_keyword model)
    {
    return model;
    }
    }
    }

