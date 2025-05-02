import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tdpdotpl_tmp } from './tdpdotpl_tmp.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tdpdotpl_tmpService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDOTPL_IDX', 'PO_CODE', 'PART_NO', 'PO_QTY', 'NT_QTY', 'CREATE_DTM', 'CREATE_USER', 'Save'];

    List: tdpdotpl_tmp[] | undefined;
    ListFilter: tdpdotpl_tmp[] | undefined;
    FormData!: tdpdotpl_tmp;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tdpdotpl_tmp";
    }
}

