namespace MESService.Model
{
	public partial class tspartTranfer : tspart
    {      
        public bool? CHK { get; set; }	          
		public int? CODE { get; set; }
        public string? PART_NAME { get; set; }
        public string? BOM_GROUP { get; set; }
        public string? MODEL { get; set; }
        public string? PART_FamilyPC { get; set; }
        public string? Packing_Unit { get; set; }
        public string? Item_TypeK { get; set; }
        public string? Item_TypeE { get; set; }
        public string? Location { get; set; }
        public string? PART_USE { get; set; }
        public string? PART_ENCNO { get; set; }
        public DateTime? PART_ECN_DATE { get; set; }
        public DateTime? Creation_date { get; set; }
        public string? Creation_User { get; set; }
        public DateTime? Update_Date { get; set; }
        //public string? Update_User { get; set; }
        public tspartTranfer()
		{
		}
	}
}
