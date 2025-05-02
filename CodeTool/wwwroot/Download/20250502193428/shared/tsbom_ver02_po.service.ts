import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tsbom_ver02_po } from './tsbom_ver02_po.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsbom_ver02_poService extends BaseService{
 DisplayColumns001: string[] = ['No', 'BOM_IDX', 'PO_DATE', 'PAREN_PART_IDX', 'PAREN_EO_IDX', 'PO_QTY', 'DSYN', 'PO_GRUP', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsbom_ver02_po[] | undefined;
    ListFilter: tsbom_ver02_po[] | undefined;
    FormData!: tsbom_ver02_po;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tsbom_ver02_po";
    }
}

