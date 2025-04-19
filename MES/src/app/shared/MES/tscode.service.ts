import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tscode } from './tscode.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tscodeService extends BaseService {
    DisplayColumns001: string[] = ['No', 'CD_IDX', 'CDGR_IDX', 'CD_SYS_NOTE', 'CD_NM_HAN', 'CD_NM_EN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tscode[] | undefined;
    ListFilter: tscode[] | undefined;
    FormData!: tscode;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tscode";
    }
    A001GetByCDGR_IDXToListAsync() {
        let url = this.APIURL + this.Controller + '/A001GetByCDGR_IDXToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

