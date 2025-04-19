import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tiivtr } from './tiivtr.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tiivtrService extends BaseService{
 DisplayColumns001: string[] = ['No', 'IV_IDX', 'PART_IDX', 'LOC_IDX', 'QTY', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tiivtr[] | undefined;
    ListFilter: tiivtr[] | undefined;
    FormData!: tiivtr;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tiivtr";
    }
}

