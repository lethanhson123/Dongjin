import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tdd_poplan } from './tdd_poplan.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tdd_poplanService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TDD_PP_IDX', 'TDD_PO_TYPE', 'TDD_POCODE', 'TDD_PP_PNIDX', 'TDD_PP_DT', 'TDD_PP_QTY', 'TDD_PP_NTQTY', 'TDD_DSCN_YN', 'TDD_REMK_YN', 'TDD_REMARK', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tdd_poplan[] | undefined;
    ListFilter: tdd_poplan[] | undefined;
    FormData!: tdd_poplan;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tdd_poplan";
    }
}

