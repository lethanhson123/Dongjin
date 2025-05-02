import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tiivaj_history } from './tiivaj_history.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tiivaj_historyService extends BaseService{
 DisplayColumns001: string[] = ['No', 'IVAJ_IDX', 'PART_IDX', 'ADJ_SCN', 'ADJ_DTM', 'ADJ_QTY', 'ADJ_BF_QTY', 'ADJ_AF_QTY', 'ADJ_RSON', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tiivaj_history[] | undefined;
    ListFilter: tiivaj_history[] | undefined;
    FormData!: tiivaj_history;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tiivaj_history";
    }
}

