import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tsnon_oper } from './tsnon_oper.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsnon_operService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TSNON_OPER_IDX', 'TSNON_OPER_CODE', 'TSNON_OPER_MCNM', 'TSNON_OPER_USERNM', 'TSNON_OPER_DATE', 'TSNON_OPER_STIME', 'TSNON_OPER_ETIME', 'TSNON_OPER_TIME', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsnon_oper[] | undefined;
    ListFilter: tsnon_oper[] | undefined;
    FormData!: tsnon_oper;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tsnon_oper";
    }
    C02_STOP_LoadAsync() {
        let url = this.APIURL + this.Controller + '/C02_STOP_LoadAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02_STOP_LoadToListAsync() {
        let url = this.APIURL + this.Controller + '/C02_STOP_LoadToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}


