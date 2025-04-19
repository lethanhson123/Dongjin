import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tspart } from './tspart.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tspartService extends BaseService {
    DisplayColumns001: string[] = ['No', 'PART_IDX', 'PART_NO', 'PART_NM', 'BOM_GRP', 'PART_CAR', 'PART_FML', 'PART_SNP', 'PART_SCN', 'PART_LOC', 'PART_USENY', 'PART_RMK', 'PART_SUPL', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];
    DisplayColumns002: string[] = ['CHK', 'CODE', 'PART_NO', 'PART_SUPL', 'PART_NAME', 'BOM_GROUP', 'MODEL', 'PART_FamilyPC', 'Packing_Unit', 'Item_TypeK', 'Item_TypeE', 'Location', 'PART_USE', 'PART_ENCNO', 'PART_ECN_DATE', 'Creation_date', 'Creation_User', 'Update_Date', 'Update_User'];
    DisplayColumns003: string[] = ['PART_IDX', 'PART_NO'];

    DataSourceTabPage2: MatTableDataSource<any>;    

    List: tspart[] | undefined;
    ListFilter: tspart[] | undefined;
    ListFilter001: tspart[] | undefined;
    ListFilter002: tspart[] | undefined;
    ListTabPage2: tspart[] | undefined;
    FormData!: tspart;
    FormDataTabPage2!: tspart;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tspart";
    }
    A001SaveAsync() {
        let url = this.APIURL + this.Controller + '/A001SaveAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.FormData));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    A001GetByGROUPBYBOM_GRPToListAsync() {
        let url = this.APIURL + this.Controller + '/A001GetByGROUPBYBOM_GRPToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    A001GetByGROUPBYPART_CARToListAsync() {
        let url = this.APIURL + this.Controller + '/A001GetByGROUPBYPART_CARToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    A001GetByGROUPBYPART_FMLToListAsync() {
        let url = this.APIURL + this.Controller + '/A001GetByGROUPBYPART_FMLToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    A001GetBySearchToListAsync() {
        let url = this.APIURL + this.Controller + '/A001GetBySearchToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    A001GetBySearchToExcelAsync() {
        let url = this.APIURL + this.Controller + '/A001GetBySearchToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    A001GetBySearchToHTMLAsync() {
        let url = this.APIURL + this.Controller + '/A001GetBySearchToHTMLAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    A001TabPage2GetBySearchToListAsync() {
        let url = this.APIURL + this.Controller + '/A001TabPage2GetBySearchToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

