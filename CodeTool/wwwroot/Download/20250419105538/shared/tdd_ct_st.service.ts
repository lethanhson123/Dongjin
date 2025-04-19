import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tdd_ct_st } from './tdd_ct_st.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tdd_ct_stService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TDD_CT_IDX', 'TDD_CT_PNIDX', 'TDD_CT_DT', 'TDD_CT_QTY', 'TDD_CT_SUB', 'TDD_CT_FA', 'TDD_CT_RO', 'TDD_MPP', 'TDD_CT_BEDT', 'TDD_CT_BEQTY', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tdd_ct_st[] | undefined;
    ListFilter: tdd_ct_st[] | undefined;
    FormData!: tdd_ct_st;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tdd_ct_st";
    }
}

