import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tscdgr } from './tscdgr.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tscdgrService extends BaseService{
 DisplayColumns001: string[] = ['No', 'CDGR_IDX', 'CDGR_SYSNOTE', 'CDGR_NM_HAN', 'CDGR_NM_EN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tscdgr[] | undefined;
    ListFilter: tscdgr[] | undefined;
    FormData!: tscdgr;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tscdgr";
    }
}

