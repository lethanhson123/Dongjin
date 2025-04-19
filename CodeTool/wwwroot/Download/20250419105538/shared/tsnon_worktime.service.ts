import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tsnon_worktime } from './tsnon_worktime.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsnon_worktimeService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TSNON_WT_IDX', 'TSNON_MCIDX', 'TSNON_SHIF', 'TSNON_DATE', 'TSNON_ST', 'TSNON_ET', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsnon_worktime[] | undefined;
    ListFilter: tsnon_worktime[] | undefined;
    FormData!: tsnon_worktime;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tsnon_worktime";
    }
}

