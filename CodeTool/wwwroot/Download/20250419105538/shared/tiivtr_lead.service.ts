import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tiivtr_lead } from './tiivtr_lead.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tiivtr_leadService extends BaseService{
 DisplayColumns001: string[] = ['No', 'IV_IDX', 'PART_IDX', 'LOC_IDX', 'QTY', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tiivtr_lead[] | undefined;
    ListFilter: tiivtr_lead[] | undefined;
    FormData!: tiivtr_lead;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tiivtr_lead";
    }
}

