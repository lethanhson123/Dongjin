import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { twwkar_lp } from './twwkar_lp.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class twwkar_lpService extends BaseService{
 DisplayColumns001: string[] = ['No', 'WK_IDX', 'TORDER_IDX', 'PART_IDX', 'MC_NO', 'WK_QTY', 'WK_TERM', 'WK_CM', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: twwkar_lp[] | undefined;
    ListFilter: twwkar_lp[] | undefined;
    FormData!: twwkar_lp;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "twwkar_lp";
    }
}

