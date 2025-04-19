import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tspart_ecn } from './tspart_ecn.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tspart_ecnService extends BaseService {
    DisplayColumns001: string[] = ['No', 'PARTECN_IDX', 'PART_IDX', 'PART_ENCNO', 'PART_ECN_DATE', 'DWG_NO', 'DWG_FILE_GRP', 'DWG_FILE_EXPOR', 'PART_ECN_USENY', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];
    DisplayColumns002: string[] = ['PART_NO', 'PART_NAME', 'PART_ECN_DATE', 'PART_ENCNO', 'DWG_NO', 'FVWR', 'DWG_FILE_GRP', 'ADDFILE', 'CREATE_DTM', 'CREATE_USER'];
    DisplayColumns003: string[] = ['PART_NO', 'PART_NAME', 'PART_ENCNO', 'PART_ECN_DATE', 'DWG_NO', 'DWG_FILE_GRP', 'DWG_FILE_EXPOR', 'PART_ECN_USENY', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM'];

    DataSourceTabPage3: MatTableDataSource<any>;    

    List: tspart_ecn[] | undefined;
    ListFilter: tspart_ecn[] | undefined;
    FormData!: tspart_ecn;
    ListTabPage3: tspart_ecn[] | undefined;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tspart_ecn";
    }
    A001TabPage2GetBySearchToListAsync() {
        let url = this.APIURL + this.Controller + '/A001TabPage2GetBySearchToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

