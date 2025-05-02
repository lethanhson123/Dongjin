import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tsmonitor_set } from './tsmonitor_set.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsmonitor_setService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TSMONITOR_SET_IDX', 'TSMONITOR_SET_NO', 'TSMONITOR_SET_CODE', 'VB_NAME', 'VB_NAME_KR', 'VB_NAME_ENG', 'VB_NAME_VN', 'VB_CHK_YN', 'VB_CY_COUNT', 'VB_TIME', 'Save'];

    List: tsmonitor_set[] | undefined;
    ListFilter: tsmonitor_set[] | undefined;
    FormData!: tsmonitor_set;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tsmonitor_set";
    }
}

