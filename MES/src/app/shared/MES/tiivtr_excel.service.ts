import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tiivtr_excel } from './tiivtr_excel.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tiivtr_excelService extends BaseService{
 DisplayColumns001: string[] = ['No', 'IV_IDX', 'PART_NO', 'LOC_IDX', 'QTY', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tiivtr_excel[] | undefined;
    ListFilter: tiivtr_excel[] | undefined;
    FormData!: tiivtr_excel;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "tiivtr_excel";
    }
}

