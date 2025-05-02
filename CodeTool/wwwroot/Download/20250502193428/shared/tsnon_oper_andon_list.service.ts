import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tsnon_oper_andon_list } from './tsnon_oper_andon_list.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsnon_oper_andon_listService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TSNON_OPER_MITOR_IDX', 'TSNON_OPER_MITOR_MCNM', 'TSNON_OPER_MITOR_NOIC', 'TSNON_OPER_MITOR_RUNYN', 'CREATE_DTM', 'CREATE_USER', 'Save'];

    List: tsnon_oper_andon_list[] | undefined;
    ListFilter: tsnon_oper_andon_list[] | undefined;
    FormData!: tsnon_oper_andon_list;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tsnon_oper_andon_list";
    }
}

