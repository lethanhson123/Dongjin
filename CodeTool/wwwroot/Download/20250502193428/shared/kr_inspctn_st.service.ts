import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { kr_inspctn_st } from './kr_inspctn_st.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class kr_inspctn_stService extends BaseService{
 DisplayColumns001: string[] = ['No', 'KR_INSPCTN_IDX', 'KR_INSPCTN_PARTIDX', 'KR_INSPCTN_EO', 'KR_INSPCTN_VER', 'KR_INSPCTN_DATE', 'KR_INSPCTN_NO', 'KR_INSPCTN_TEXT', 'KR_INSPCTN_ST', 'KR_INSPCTN_MIN', 'KR_INSPCTN_MAX', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: kr_inspctn_st[] | undefined;
    ListFilter: kr_inspctn_st[] | undefined;
    FormData!: kr_inspctn_st;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/kr_inspctn_st";
    }
}

