import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tsnotice } from './tsnotice.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsnoticeService extends BaseService{
 DisplayColumns001: string[] = ['No', 'Notice_IDX', 'Title', 'Contents', 'CREATE_DTM', 'CREATE_USER', 'Save'];

    List: tsnotice[] | undefined;
    ListFilter: tsnotice[] | undefined;
    FormData!: tsnotice;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tsnotice";
    }
}

