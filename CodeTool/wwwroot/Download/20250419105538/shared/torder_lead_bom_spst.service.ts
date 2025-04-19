import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { torder_lead_bom_spst } from './torder_lead_bom_spst.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torder_lead_bom_spstService extends BaseService{
 DisplayColumns001: string[] = ['No', 'SPST_IDX', 'M_PART_IDX', 'S_PART_IDX', 'RQR_MENT', 'S_LR', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: torder_lead_bom_spst[] | undefined;
    ListFilter: torder_lead_bom_spst[] | undefined;
    FormData!: torder_lead_bom_spst;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "torder_lead_bom_spst";
    }
}

