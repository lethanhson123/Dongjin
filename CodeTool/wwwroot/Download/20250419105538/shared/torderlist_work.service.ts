import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { torderlist_work } from './torderlist_work.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torderlist_workService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TORDERLIST_WORK_IDX', 'TORDERLIST_WORK_MC', 'TORDERLIST_WORK_ORDERIDX', 'TORDERLIST_WORK_USER', 'Save'];

    List: torderlist_work[] | undefined;
    ListFilter: torderlist_work[] | undefined;
    FormData!: torderlist_work;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "torderlist_work";
    }
}

