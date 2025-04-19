import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { torder_lead_bom_excl } from './torder_lead_bom_excl.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torder_lead_bom_exclService extends BaseService{
 DisplayColumns001: string[] = ['No', 'LEAD_INDEX', 'LEAD_SCN', 'LEAD_PN', 'BUNDLE_SIZE', 'W_PN_IDX', 'T1_PN_IDX', 'S1_PN_IDX', 'T2_PN_IDX', 'S2_PN_IDX', 'STRIP1', 'STRIP2', 'CCH_W1', 'ICH_W1', 'CCH_W2', 'ICH_W2', 'T1NO', 'T2NO', 'W_LINK', 'WR_NO', 'WIRE_NM', 'W_Diameter', 'W_Color', 'W_Length', 'DSCN_YN', 'HOOK_RACK', 'SFTY_STK', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: torder_lead_bom_excl[] | undefined;
    ListFilter: torder_lead_bom_excl[] | undefined;
    FormData!: torder_lead_bom_excl;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "torder_lead_bom_excl";
    }
}

