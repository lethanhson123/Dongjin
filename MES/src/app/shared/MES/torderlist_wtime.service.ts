﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { torderlist_wtime } from './torderlist_wtime.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torderlist_wtimeService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TOWT_INDX', 'MENU_TEXT', 'USER_ID', 'USER_MC', 'ORDER_IDX', 'S_TIME', 'E_TIME', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: torderlist_wtime[] | undefined;
    ListFilter: torderlist_wtime[] | undefined;
    FormData!: torderlist_wtime;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/torderlist_wtime";
    }
    C02_STOP_SW_TIMEAsync() {
        let url = this.APIURL + this.Controller + '/C02_STOP_SW_TIMEAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02_STOP_EW_TIMEAsync() {
        let url = this.APIURL + this.Controller + '/C02_STOP_EW_TIMEAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02_STOP_SW_TIMEToListAsync() {
        let url = this.APIURL + this.Controller + '/C02_STOP_SW_TIMEToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

