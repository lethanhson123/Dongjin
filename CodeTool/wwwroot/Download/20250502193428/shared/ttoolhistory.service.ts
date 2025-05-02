import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { ttoolhistory } from './ttoolhistory.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ttoolhistoryService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TOOL_HIS_IDX', 'WORK_DTM', 'TOOL_IDX', 'WK_QTY', 'TOT_QTY', 'CONTENT', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: ttoolhistory[] | undefined;
    ListFilter: ttoolhistory[] | undefined;
    FormData!: ttoolhistory;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/ttoolhistory";
    }
}

