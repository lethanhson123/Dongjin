import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ttoolmaster2 } from './ttoolmaster2.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ttoolmaster2Service extends BaseService{
 DisplayColumns001: string[] = ['No', 'TOOLMASTER_IDX', 'TOOL_IDX', 'SEQ', 'TOT_WK_CNT', 'WK_CNT', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: ttoolmaster2[] | undefined;
    ListFilter: ttoolmaster2[] | undefined;
    FormData!: ttoolmaster2;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ttoolmaster2";
    }
}

