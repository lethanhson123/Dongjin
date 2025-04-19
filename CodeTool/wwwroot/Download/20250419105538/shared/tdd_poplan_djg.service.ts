import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tdd_poplan_djg } from './tdd_poplan_djg.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tdd_poplan_djgService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TDD_PPD_IDX', 'TDD_PO_TYPE', 'TDD_PPD_PNIDX', 'TDD_PPD_DT', 'TDD_PPD_DVC', 'TDD_PPD_QTY', 'TDD_PPD_BEQTY', 'TDD_DSCN_YN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tdd_poplan_djg[] | undefined;
    ListFilter: tdd_poplan_djg[] | undefined;
    FormData!: tdd_poplan_djg;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tdd_poplan_djg";
    }
}

