import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tdpdmtim_autobc_list } from './tdpdmtim_autobc_list.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tdpdmtim_autobc_listService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDMTINABC_IDX', 'PDMTINABC_PRT_IDX', 'PDMTN_BARCODE', 'PDMTINABC_DSCN_YN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tdpdmtim_autobc_list[] | undefined;
    ListFilter: tdpdmtim_autobc_list[] | undefined;
    FormData!: tdpdmtim_autobc_list;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tdpdmtim_autobc_list";
    }
}

