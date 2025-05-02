import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { twtool } from './twtool.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class twtoolService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TOOLWORK_IDX', 'TOOL_IDX', 'TOOL_WORK', 'WK_QTY', 'TOT_WK_QTY', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: twtool[] | undefined;
    ListFilter: twtool[] | undefined;
    FormData!: twtool;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/twtool";
    }
}

