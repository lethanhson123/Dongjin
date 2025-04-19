import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { xsetting_time } from './xsetting_time.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class xsetting_timeService extends BaseService{
 DisplayColumns001: string[] = ['No', 'SETTING_IDX', 'TABLE_NM', 'SUB_NM', 'REMARK', 'BASIC_TIME', 'UNIT', 'TIME', 'Save'];

    List: xsetting_time[] | undefined;
    ListFilter: xsetting_time[] | undefined;
    FormData!: xsetting_time;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "xsetting_time";
    }
}

