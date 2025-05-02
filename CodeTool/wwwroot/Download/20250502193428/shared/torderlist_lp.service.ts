import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { torderlist_lp } from './torderlist_lp.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torderlist_lpService extends BaseService{
 DisplayColumns001: string[] = ['No', 'ORDER_IDX', 'MC', 'TOT_QTY', 'PERFORMN_L', 'PERFORMN_R', 'CONDITION', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'LEAD_NO', 'PROJECT', 'ADJ_AF_QTY', 'CUR_LEADS', 'CT_LEADS', 'CT_LEADS_PR', 'GRP', 'PRT', 'DT', 'MC2', 'BUNDLE_SIZE', 'HOOK_RACK', 'WIRE', 'T1_DIR', 'TERM1', 'STRIP1', 'SEAL1', 'CCH_W1', 'ICH_W1', 'T2_DIR', 'TERM2', 'STRIP2', 'SEAL2', 'CCH_W2', 'ICH_W2', 'SP_ST', 'REP', 'DSCN_YN', 'Save'];

    List: torderlist_lp[] | undefined;
    ListFilter: torderlist_lp[] | undefined;
    FormData!: torderlist_lp;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/torderlist_lp";
    }
}

