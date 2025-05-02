import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { ttc_bom } from './ttc_bom.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ttc_bomService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TTC_BOM_IDX', 'PART_IDX', 'TTC_PART_IDX', 'TTC_BOMSNP', 'TCC_DSVYN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: ttc_bom[] | undefined;
    ListFilter: ttc_bom[] | undefined;
    FormData!: ttc_bom;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/ttc_bom";
    }
}

