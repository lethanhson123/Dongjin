import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { twwkar } from './twwkar.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class twwkarService extends BaseService{
 DisplayColumns001: string[] = ['No', 'WK_IDX', 'TORDER_IDX', 'PART_IDX', 'MC_NO', 'WK_QTY', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: twwkar[] | undefined;
    ListFilter: twwkar[] | undefined;
    FormData!: twwkar;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "twwkar";
    }
}

