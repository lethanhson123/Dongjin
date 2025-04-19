import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pdcdgr } from './pdcdgr.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class pdcdgrService extends BaseService{
 DisplayColumns001: string[] = ['No', 'CDGR_IDX', 'CDGR_SYSNOTE', 'CDGR_NM_VN', 'CDGR_NM_HAN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: pdcdgr[] | undefined;
    ListFilter: pdcdgr[] | undefined;
    FormData!: pdcdgr;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "pdcdgr";
    }
}

