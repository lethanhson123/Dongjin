import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { apqp_mstlst } from './apqp_mstlst.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class apqp_mstlstService extends BaseService{
 DisplayColumns001: string[] = ['No', 'APQP_MS_IDX', 'APQP_CSTM', 'APQP_MS_RNK', 'APQP_MS_PRJT', 'APQP_MS_CODE0', 'APQP_MS_CODE1', 'APQP_MS_CODE2', 'APQP_MS_CODE3', 'APQP_MS_NM', 'APQP_MS_TM', 'APQP_MS_USER', 'APQP_MS_SDT', 'APQP_MS_EDT', 'APQP_MS_DSYN', 'APQP_MS_NOTE', 'APQP_MS_REMARK', 'APQP_MS_FLDSYN', 'APQP_MS_FILE', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: apqp_mstlst[] | undefined;
    ListFilter: apqp_mstlst[] | undefined;
    FormData!: apqp_mstlst;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/apqp_mstlst";
    }
}

