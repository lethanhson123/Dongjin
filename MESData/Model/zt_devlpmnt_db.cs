namespace MESData.Model
{
    public partial class zt_devlpmnt_db : BaseModel
    {
        [Key]
        public int? DELP_IDX { get; set; }
public string? DELP_DATE { get; set; }
public string? DELP_DEPT { get; set; }
public string? MES_MENU { get; set; }
public string? DELP_NAME { get; set; }
public string? DELP_DETIL { get; set; }
public string? FILE_DSYN { get; set; }
public string? FILE_NM { get; set; }
public string? FILE_EX { get; set; }
public string? FILE_SIZE { get; set; }
public DateTime? CREATE_DTM { get; set; }
public string? CREATE_USER { get; set; }
public string? STATE { get; set; }
public string? PROGRESS { get; set; }
public string? DONE_DATE { get; set; }
public string? MES_VER { get; set; }
public string? DELP_DELT { get; set; }
public string? RESULT { get; set; }
public DateTime? UPDATE_DTM { get; set; }
public string? UPDATE_USER { get; set; }
public string? DEP_PHOTO { get; set; }

        public zt_devlpmnt_db()
        {
        }
    }
}

