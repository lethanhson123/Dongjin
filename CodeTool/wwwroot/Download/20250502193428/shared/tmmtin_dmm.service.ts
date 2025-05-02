import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tmmtin_dmm } from './tmmtin_dmm.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tmmtin_dmmService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TMMTIN_DMM_IDX', 'TMMTIN_DMM_STGC', 'TMMTIN_DATE', 'TMMTIN_CODE', 'TMMTIN_PART', 'TMMTIN_PART_SNP', 'TMMTIN_QTY', 'TMMTIN_REC_YN', 'TMMTIN_CNF_YN', 'TMMTIN_DSCN_YN', 'TMMTIN_SHEETNO', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tmmtin_dmm[] | undefined;
    ListFilter: tmmtin_dmm[] | undefined;
    FormData!: tmmtin_dmm;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tmmtin_dmm";
    }
}

