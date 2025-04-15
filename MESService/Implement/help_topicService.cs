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
    }
}

