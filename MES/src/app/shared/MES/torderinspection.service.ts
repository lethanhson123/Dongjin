import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { torderinspection } from './torderinspection.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torderinspectionService extends BaseService{
 DisplayColumns001: string[] = ['No', 'INSPECTION_IDX', 'ORDER_IDX', 'COLSIP', 'CCH1', 'CCW1', 'CCH2', 'CCW2', 'ICH1', 'ICW1', 'ICH2', 'ICW2', 'WIRE_FORCE', 'WIRE_LENGTH', 'IN_RESILT', 'CREATE_DTM', 'CREATE_USER', 'Save'];

    List: torderinspection[] | undefined;
    ListFilter: torderinspection[] | undefined;
    FormData!: torderinspection;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "torderinspection";
    }
}

