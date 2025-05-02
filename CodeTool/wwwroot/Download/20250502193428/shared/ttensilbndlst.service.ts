import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { ttensilbndlst } from './ttensilbndlst.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ttensilbndlstService extends BaseService{
 DisplayColumns001: string[] = ['No', 'BNDLST_IDX', 'BNDLST_NM', 'BNDLST_MIN', 'BNDLST_MAX', 'STRENGTH', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: ttensilbndlst[] | undefined;
    ListFilter: ttensilbndlst[] | undefined;
    FormData!: ttensilbndlst;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/ttensilbndlst";
    }
}

