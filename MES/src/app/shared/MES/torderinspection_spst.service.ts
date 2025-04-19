import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { torderinspection_spst } from './torderinspection_spst.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torderinspection_spstService extends BaseService{
 DisplayColumns001: string[] = ['No', 'INSPECTION_IDX', 'ORDER_IDX', 'COLSIP', 'RES_H', 'RES_V', 'IN_RESILT', 'Save'];

    List: torderinspection_spst[] | undefined;
    ListFilter: torderinspection_spst[] | undefined;
    FormData!: torderinspection_spst;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "torderinspection_spst";
    }
}

