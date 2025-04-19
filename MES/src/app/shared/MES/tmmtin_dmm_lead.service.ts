import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tmmtin_dmm_lead } from './tmmtin_dmm_lead.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tmmtin_dmm_leadService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TMMTIN_DMM_IDX', 'TMMTIN_DMM_STGC', 'TMMTIN_DATE', 'TMMTIN_PART', 'TMMTIN_PART_SNP', 'TMMTIN_QTY', 'TMMTIN_REC_YN', 'TMMTIN_CNF_YN', 'TMMTIN_DSCN_YN', 'TMMTIN_SHEETNO', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tmmtin_dmm_lead[] | undefined;
    ListFilter: tmmtin_dmm_lead[] | undefined;
    FormData!: tmmtin_dmm_lead;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tmmtin_dmm_lead";
    }
}

