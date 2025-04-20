import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tsnon_oper_mitor } from './tsnon_oper_mitor.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsnon_oper_mitorService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TSNON_OPER_MITOR_IDX', 'TSNON_OPER_MITOR_MCNM', 'TSNON_OPER_MITOR_NOIC', 'TSNON_OPER_MITOR_RUNYN', 'Save'];

    List: tsnon_oper_mitor[] | undefined;
    ListFilter: tsnon_oper_mitor[] | undefined;
    FormData!: tsnon_oper_mitor;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tsnon_oper_mitor";
    }
    C02_LoadAsync() {
        let url = this.APIURL + this.Controller + '/C02_LoadAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02_STOP_LoadAsync() {
        let url = this.APIURL + this.Controller + '/C02_STOP_LoadAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

