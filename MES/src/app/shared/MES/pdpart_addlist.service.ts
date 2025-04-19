import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pdpart_addlist } from './pdpart_addlist.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class pdpart_addlistService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDPART_AL_IDX', 'PN_NM_AL', 'PN_V_AL', 'PSPEC_V_AL', 'PN_K_AL', 'PSPEC_K_AL', 'PQTY_AL', 'CREATE_DTM', 'CREATE_USER', 'Save'];

    List: pdpart_addlist[] | undefined;
    ListFilter: pdpart_addlist[] | undefined;
    FormData!: pdpart_addlist;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "pdpart_addlist";
    }
}

