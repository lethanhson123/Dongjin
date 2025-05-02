import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { torderinspection_sw } from './torderinspection_sw.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torderinspection_swService extends BaseService{
 DisplayColumns001: string[] = ['No', 'INSPECTION_IDX', 'ORDER_IDX', 'LOC_LRJ', 'COLSIP', 'CCH', 'CCW', 'ICH', 'ICW', 'WIRE_FORCE', 'IN_RESILT', 'Save'];

    List: torderinspection_sw[] | undefined;
    ListFilter: torderinspection_sw[] | undefined;
    FormData!: torderinspection_sw;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/torderinspection_sw";
    }
}

