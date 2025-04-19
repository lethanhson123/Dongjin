import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tsyear_inventory } from './tsyear_inventory.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tsyear_inventoryService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TSYEAR_INV_IDX', 'TSYEAR_INV_YEAR', 'TSYEAR_INV_SERIALNO', 'TSYEAR_INV_DEPART', 'TSYEAR_INV_PKILOC', 'TSYEAR_INV_PART_TNM', 'TSYEAR_INV_PART_IDX', 'TSYEAR_INV_QTY', 'TSYEAR_INV_DSNY', 'TSYEAR_INV_MESNO', 'TSYEAR_INV_ANM', 'TSYEAR_INV_DJGLOC', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tsyear_inventory[] | undefined;
    ListFilter: tsyear_inventory[] | undefined;
    FormData!: tsyear_inventory;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tsyear_inventory";
    }
}

