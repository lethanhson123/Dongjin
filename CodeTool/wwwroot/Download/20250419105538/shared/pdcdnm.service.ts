import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pdcdnm } from './pdcdnm.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class pdcdnmService extends BaseService{
 DisplayColumns001: string[] = ['No', 'CD_IDX', 'CDGR_IDX', 'CD_SYS_NOTE', 'CD_NM_VN', 'CD_NM_HAN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: pdcdnm[] | undefined;
    ListFilter: pdcdnm[] | undefined;
    FormData!: pdcdnm;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "pdcdnm";
    }
}

