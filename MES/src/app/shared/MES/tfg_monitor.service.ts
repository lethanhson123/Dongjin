import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tfg_monitor } from './tfg_monitor.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tfg_monitorService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TFG_MO_IDX', 'TFG_DATE', 'TFG_CD_IDX', 'TFG_QTY', 'TFG_QTYBOX', 'TFG_TOTL_QTY', 'TFG_TOTL_QTYBOX', 'TFG_NTC', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tfg_monitor[] | undefined;
    ListFilter: tfg_monitor[] | undefined;
    FormData!: tfg_monitor;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tfg_monitor";
    }
}

