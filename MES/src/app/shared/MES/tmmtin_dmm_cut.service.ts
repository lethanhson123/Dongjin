import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tmmtin_dmm_cut } from './tmmtin_dmm_cut.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tmmtin_dmm_cutService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TMMTIN_DMM_IDX', 'TMMTIN_DMM_STGC', 'TMMTIN_DATE', 'TMMTIN_CODE', 'TMMTIN_PART', 'TMMTIN_PART_SNP', 'TMMTIN_QTY', 'TMMTIN_REC_YN', 'TMMTIN_CNF_YN', 'TMMTIN_DSCN_YN', 'TMMTIN_SHEETNO', 'TMMTIN_ORDERNO', 'TMMTIN_MTORDR', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tmmtin_dmm_cut[] | undefined;
    ListFilter: tmmtin_dmm_cut[] | undefined;
    FormData!: tmmtin_dmm_cut;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tmmtin_dmm_cut";
    }
}

