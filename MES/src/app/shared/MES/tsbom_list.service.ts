import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tsbom_list } from './tsbom_list.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsbom_listService extends BaseService{
 DisplayColumns001: string[] = ['No', 'BOM_LIST_IDX', 'PAREN_PART_NO', 'PART_NO', 'PART_NONM', 'BOM_DES', 'BOM_UNIT', 'BOM_GRUP', 'BOM_RMK', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsbom_list[] | undefined;
    ListFilter: tsbom_list[] | undefined;
    FormData!: tsbom_list;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tsbom_list";
    }
}

