﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tuser_log_chk } from './tuser_log_chk.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tuser_log_chkService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TUSER_IDX', 'TS_USERID', 'TS_USER_IP', 'TS_USER_CNN', 'CREATE_DTM', 'CREATE_USER', 'Save'];

    List: tuser_log_chk[] | undefined;
    ListFilter: tuser_log_chk[] | undefined;
    FormData!: tuser_log_chk;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tuser_log_chk";
    }
}

