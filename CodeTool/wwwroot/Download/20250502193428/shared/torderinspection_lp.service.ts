import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { torderinspection_lp } from './torderinspection_lp.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torderinspection_lpService extends BaseService{
 DisplayColumns001: string[] = ['No', 'INSPECTION_IDX', 'ORDER_IDX', 'COLSIP', 'CCH1', 'CCW1', 'CCH2', 'CCW2', 'ICH1', 'ICW1', 'ICH2', 'ICW2', 'WIRE_FORCE', 'IN_RESILT', 'CHK_LR', 'Save'];

    List: torderinspection_lp[] | undefined;
    ListFilter: torderinspection_lp[] | undefined;
    FormData!: torderinspection_lp;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/torderinspection_lp";
    }
}

