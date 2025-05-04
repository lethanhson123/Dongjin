namespace CodeTool.Models
{
    public class tsmenuTranfer
    {
        public int? MENU_IDX { get; set; }
        public int? MENU_CD { get; set; }
        public int? MENU_LVL { get; set; }
        public string? MENU_NM_EN { get; set; }
        public string? MENU_NM_HAN { get; set; }
        public int? MENU_NM_VIE { get; set; }
        public string? SCRN_PATH { get; set; }
        public string? DECYN { get; set; }
        public DateTime? CREATE_DTM { get; set; }
        public string? CREATE_USER { get; set; }
        public DateTime? UPDATE_DTM { get; set; }
        public string? UPDATE_USER { get; set; }
        public int? ParentID { get; set; }
        public bool? Visible { get; set; }
        public string? Code { get; set; }
        public tsmenuTranfer()
        {
        }
    }
}
