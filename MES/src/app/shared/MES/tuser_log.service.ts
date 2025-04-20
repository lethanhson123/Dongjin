import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tuser_log } from './tuser_log.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tuser_logService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TUSER_IDX', 'TS_MC_NM', 'TS_DATE', 'TS_TIME_ST', 'TS_TIME_END', 'TS_USER', 'Save'];

    List: tuser_log[] | undefined;
    ListFilter: tuser_log[] | undefined;
    FormData!: tuser_log;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tuser_log";
    }
    C02TS_USERToListAsync() {
        let url = this.APIURL + this.Controller + '/C02TS_USERToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02TS_USERUSER_TIMEToListAsync() {
        let url = this.APIURL + this.Controller + '/C02TS_USERUSER_TIMEToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

