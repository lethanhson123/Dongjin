import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { apqp_cdgr } from './apqp_cdgr.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class apqp_cdgrService extends BaseService{
 DisplayColumns001: string[] = ['No', 'CDGR_IDX', 'CDGR_SYSNOTE', 'CDGR_NM_KR', 'CDGR_NM_ENG', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: apqp_cdgr[] | undefined;
    ListFilter: apqp_cdgr[] | undefined;
    FormData!: apqp_cdgr;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/apqp_cdgr";
    }
}

