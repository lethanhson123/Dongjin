import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pd_cmpny_costfile } from './pd_cmpny_costfile.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class pd_cmpny_costfileService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PD_CMPNY_PART_IDX', 'CMPNY_IDX', 'COST_DATE', 'COST_FILENM', 'COST_FILETYPE', 'REMARK', 'DSN_YN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: pd_cmpny_costfile[] | undefined;
    ListFilter: pd_cmpny_costfile[] | undefined;
    FormData!: pd_cmpny_costfile;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "pd_cmpny_costfile";
    }
}

