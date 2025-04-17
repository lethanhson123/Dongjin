namespace MESService.Implement
{
    public class help_relationService : BaseService<help_relation, Ihelp_relationRepository>
    , Ihelp_relationService
    {
    private readonly Ihelp_relationRepository _help_relationRepository;
    public help_relationService(Ihelp_relationRepository help_relationRepository) : base(help_relationRepository)
    {
    _help_relationRepository = help_relationRepository;
    }
    public override void Initialization(help_relation model)
    {
    BaseInitialization(model);
    }
    public override async Task<help_relation> SaveAsync(help_relation model)
    {
    try
    {
    if (model.help_topic_id > 0)
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
    public virtual async Task<help_relation> Sync(help_relation model)
    {
    return model;
    }
    }
    }

