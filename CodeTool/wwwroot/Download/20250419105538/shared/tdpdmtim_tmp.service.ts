import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tdpdmtim_tmp } from './tdpdmtim_tmp.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tdpdmtim_tmpService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDTMP_IDX', 'VLID_GRP', 'VLID_USE_YN', 'CREATE_DTM', 'CREATE_USER', 'Save'];

    List: tdpdmtim_tmp[] | undefined;
    ListFilter: tdpdmtim_tmp[] | undefined;
    FormData!: tdpdmtim_tmp;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tdpdmtim_tmp";
    }
}

