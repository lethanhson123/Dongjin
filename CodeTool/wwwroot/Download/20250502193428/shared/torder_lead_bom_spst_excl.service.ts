import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { torder_lead_bom_spst_excl } from './torder_lead_bom_spst_excl.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torder_lead_bom_spst_exclService extends BaseService{
 DisplayColumns001: string[] = ['No', 'SPST_IDX', 'M_PART_IDX', 'S_PART_IDX', 'RQR_MENT', 'S_LR', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: torder_lead_bom_spst_excl[] | undefined;
    ListFilter: torder_lead_bom_spst_excl[] | undefined;
    FormData!: torder_lead_bom_spst_excl;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/torder_lead_bom_spst_excl";
    }
}

