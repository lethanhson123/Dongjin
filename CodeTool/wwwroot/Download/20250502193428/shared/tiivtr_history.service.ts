import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tiivtr_history } from './tiivtr_history.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tiivtr_historyService extends BaseService{
 DisplayColumns001: string[] = ['No', 'IV_IDX', 'STOCK_DATE', 'PART_IDX', 'LOC_IDX', 'QTY', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tiivtr_history[] | undefined;
    ListFilter: tiivtr_history[] | undefined;
    FormData!: tiivtr_history;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tiivtr_history";
    }
}

