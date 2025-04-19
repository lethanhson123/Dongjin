import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { torderlist } from './torderlist.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torderlistService extends BaseService{
 DisplayColumns001: string[] = ['No', 'ORDER_IDX', 'OR_NO', 'WORK_WEEK', 'LEAD_NO', 'PROJECT', 'TOT_QTY', 'ADJ_AF_QTY', 'CUR_LEADS', 'CT_LEADS', 'CT_LEADS_PR', 'GRP', 'PRT', 'DT', 'MC', 'MC2', 'BUNDLE_SIZE', 'HOOK_RACK', 'WIRE', 'T1_DIR', 'TERM1', 'STRIP1', 'SEAL1', 'CCH_W1', 'ICH_W1', 'T2_DIR', 'TERM2', 'STRIP2', 'SEAL2', 'CCH_W2', 'ICH_W2', 'SP_ST', 'REP', 'DSCN_YN', 'PERFORMN', 'CONDITION', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'FCTRY_NM', 'MTRL_RQUST', 'TORDER_FG', 'TOEXCEL_QTY', 'Save'];

    List: torderlist[] | undefined;
    ListFilter: torderlist[] | undefined;
    FormData!: torderlist;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "torderlist";
    }
}

