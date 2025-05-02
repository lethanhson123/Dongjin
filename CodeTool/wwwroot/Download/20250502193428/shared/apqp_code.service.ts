import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { apqp_code } from './apqp_code.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class apqp_codeService extends BaseService{
 DisplayColumns001: string[] = ['No', 'CD_IDX', 'CDGR_IDX', 'CD_SYS_NOTE', 'CD_NM_GRP', 'CD_NM', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: apqp_code[] | undefined;
    ListFilter: apqp_code[] | undefined;
    FormData!: apqp_code;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/apqp_code";
    }
}

