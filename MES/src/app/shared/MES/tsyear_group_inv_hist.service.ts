﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tsyear_group_inv_hist } from './tsyear_group_inv_hist.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsyear_group_inv_histService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TSYEAR_GROUP_IDX', 'TSYEAR_YEAR', 'TSYEAR_MESNO', 'TSYEAR_DEPART', 'TSYEAR_PKILOC', 'TSYEAR_INPUTER', 'TSYEAR_SERIAL_NO1', 'TSYEAR_SERIAL_NO2', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsyear_group_inv_hist[] | undefined;
    ListFilter: tsyear_group_inv_hist[] | undefined;
    FormData!: tsyear_group_inv_hist;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tsyear_group_inv_hist";
    }
}

