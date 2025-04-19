﻿namespace MESData.Model
{
    public partial class torder_spc : BaseModel
    {
        [Key]
        public int? SPC_IDX { get; set; }
public string? SPC_GRP { get; set; }
public int? LEAD_IDX { get; set; }
public int? TERM_IDX { get; set; }
public string? SPC_DATE { get; set; }
public string? SPC_ST { get; set; }
public string? SPC_MIN { get; set; }
public string? SPC_MAX { get; set; }
public string? CCH_XN { get; set; }
public DateTime? CREATE_DTM { get; set; }
public string? CREATE_USER { get; set; }
public DateTime? UPDATE_DTM { get; set; }
public string? UPDATE_USER { get; set; }

        public torder_spc()
        {
        }
    }
}

