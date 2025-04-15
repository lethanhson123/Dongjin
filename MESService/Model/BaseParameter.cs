namespace MESService.Model
{
	public partial class BaseParameter : BaseModel
    {      
        public int? Page { get; set; }
		public int? PageSize { get; set; }              
		public string? SearchString { get; set; }				
		public int? ID { get; set; }
        public string? Code { get; set; }
        public BaseParameter()
		{
		}
	}
}
