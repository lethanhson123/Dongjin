namespace MESService.Model
{
	public partial class torderlistTranfer : torderlist
    {      
        public bool? CHK { get; set; }
        public double? QTY_STOCK { get; set; }
        public double? REM_QTY { get; set; }
        public double? SUM_QTY { get; set; }
        public double? ACT { get; set; }
        public DateTime? LS_DATE { get; set; }
        public torderlistTranfer()
		{
		}
	}
}
