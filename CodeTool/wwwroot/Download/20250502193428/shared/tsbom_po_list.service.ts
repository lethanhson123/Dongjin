import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tsbom_po_list } from './tsbom_po_list.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsbom_po_listService extends BaseService{
 DisplayColumns001: string[] = ['No', 'BOM_PO_LIST_IDX', 'PART_NO', 'PO_QTY', 'DSYN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsbom_po_list[] | undefined;
    ListFilter: tsbom_po_list[] | undefined;
    FormData!: tsbom_po_list;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tsbom_po_list";
    }
}

