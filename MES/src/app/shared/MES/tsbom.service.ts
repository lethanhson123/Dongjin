import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tsbom } from './tsbom.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsbomService extends BaseService{
 DisplayColumns001: string[] = ['No', 'BOM_IDX', 'PAREN_PART_IDX', 'PART_IDX', 'BOM_US', 'BOM_DSYN', 'BOM_REMARK', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsbom[] | undefined;
    ListFilter: tsbom[] | undefined;
    FormData!: tsbom;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tsbom";
    }
}

