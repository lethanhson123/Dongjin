namespace MESService.Implement
{
    public class help_topicService : BaseService<help_topic, Ihelp_topicRepository>
    , Ihelp_topicService
    {
        private readonly Ihelp_topicRepository _help_topicRepository;
        public help_topicService(Ihelp_topicRepository help_topicRepository


        ) : base(help_topicRepository)
        {
            _help_topicRepository = help_topicRepository;
        }
        public override void Initialization(help_topic model)
        {
            BaseInitialization(model);
        }
        public override async Task<help_topic> SaveAsync(help_topic model)
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
        public virtual async Task<help_topic> Sync(help_topic model)
        {            
            return model;
        }
    }
}

