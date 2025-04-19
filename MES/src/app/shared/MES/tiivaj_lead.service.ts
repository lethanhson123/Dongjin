import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tiivaj_lead } from './tiivaj_lead.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tiivaj_leadService extends BaseService{
 DisplayColumns001: string[] = ['No', 'IVAJ_IDX', 'PART_IDX', 'ADJ_SCN', 'ADJ_DTM', 'ADJ_QTY', 'ADJ_BF_QTY', 'ADJ_AF_QTY', 'ADJ_RSON', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tiivaj_lead[] | undefined;
    ListFilter: tiivaj_lead[] | undefined;
    FormData!: tiivaj_lead;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tiivaj_lead";
    }
}

