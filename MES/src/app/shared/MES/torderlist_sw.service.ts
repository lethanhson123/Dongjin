import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { torderlist_sw } from './torderlist_sw.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torderlist_swService extends BaseService{
 DisplayColumns001: string[] = ['No', 'ORDER_IDX', 'MC', 'TOT_QTY', 'PERFORMN', 'CONDITION', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: torderlist_sw[] | undefined;
    ListFilter: torderlist_sw[] | undefined;
    FormData!: torderlist_sw;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "torderlist_sw";
    }
}

