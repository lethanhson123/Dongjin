import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { torder_bom_spst2 } from './torder_bom_spst2.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torder_bom_spst2Service extends BaseService{
 DisplayColumns001: string[] = ['No', 'TORDER_BOMSPST2_IDX', 'TORDER_BOMSPST_IDX', 'TORDER_SPSTORDER_IDX', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: torder_bom_spst2[] | undefined;
    ListFilter: torder_bom_spst2[] | undefined;
    FormData!: torder_bom_spst2;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "torder_bom_spst2";
    }
}

