import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { kr_tdd_poplan } from './kr_tdd_poplan.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class kr_tdd_poplanService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TDD_PP_IDX', 'TDD_PO_TYPE', 'TDD_POCODE', 'TDD_POCSTM', 'TDD_PP_PNIDX', 'TDD_PP_DT', 'TDD_PP_QTY', 'TDD_PP_PACK', 'TDD_DSCN_YN', 'TDD_REMARK', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: kr_tdd_poplan[] | undefined;
    ListFilter: kr_tdd_poplan[] | undefined;
    FormData!: kr_tdd_poplan;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/kr_tdd_poplan";
    }
}

