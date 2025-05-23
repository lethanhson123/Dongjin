﻿namespace MESService.Model
{
	public partial class BaseParameter : BaseModel
    {      
        public int? Page { get; set; }
		public int? PageSize { get; set; }              
		public string? SearchString { get; set; }
        public string? SearchString001 { get; set; }
        public string? SearchString002 { get; set; }
        public string? SearchString003 { get; set; }
        public string? SearchString004 { get; set; }
        public string? SearchString005 { get; set; }
        public string? SearchString006 { get; set; }
        public int? ID { get; set; }
        public int? ParentID { get; set; }
        public string? Code { get; set; }
        public string? Account { get; set; }
        public DateTime? Begin { get; set; }
        public List<int>? ListID { get; set; }
        public List<DateTime>? ListBegin { get; set; }
        public List<string>? ListSearchString { get; set; }
        public List<string>? ListSearchString001 { get; set; }
        public List<string>? ListSearchString002 { get; set; }
        public BaseParameter()
		{
		}
	}
}
