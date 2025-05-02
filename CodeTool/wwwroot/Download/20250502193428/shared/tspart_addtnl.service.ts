import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tspart_addtnl } from './tspart_addtnl.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tspart_addtnlService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PART_ADDTNL_IDX', 'PARTNO_IDX', 'OP_W', 'OP_L', 'OP_H', 'OP_MRP', 'OP_TMP1', 'OP_TMP2', 'OP_TMP3', 'Weight', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tspart_addtnl[] | undefined;
    ListFilter: tspart_addtnl[] | undefined;
    FormData!: tspart_addtnl;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tspart_addtnl";
    }
}

