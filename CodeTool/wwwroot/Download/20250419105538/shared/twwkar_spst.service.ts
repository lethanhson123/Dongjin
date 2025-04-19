import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { twwkar_spst } from './twwkar_spst.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class twwkar_spstService extends BaseService{
 DisplayColumns001: string[] = ['No', 'WK_IDX', 'TORDER_IDX', 'PART_IDX', 'MC_NO', 'WK_QTY', 'WK_CM', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: twwkar_spst[] | undefined;
    ListFilter: twwkar_spst[] | undefined;
    FormData!: twwkar_spst;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "twwkar_spst";
    }
}

