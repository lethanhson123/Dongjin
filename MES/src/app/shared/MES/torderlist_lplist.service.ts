import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { torderlist_lplist } from './torderlist_lplist.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torderlist_lplistService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TORDERLIST_LPLIST_IDX', 'LPLIST_LEADNO', 'LPLIST_DYN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: torderlist_lplist[] | undefined;
    ListFilter: torderlist_lplist[] | undefined;
    FormData!: torderlist_lplist;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "torderlist_lplist";
    }
}

