import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tiivtr_lead_fg } from './tiivtr_lead_fg.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tiivtr_lead_fgService extends BaseService{
 DisplayColumns001: string[] = ['No', 'IV_IDX', 'PART_IDX', 'LOC_IDX', 'QTY', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tiivtr_lead_fg[] | undefined;
    ListFilter: tiivtr_lead_fg[] | undefined;
    FormData!: tiivtr_lead_fg;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tiivtr_lead_fg";
    }
}

