import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { torderlist } from './torderlist.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class torderlistService extends BaseService {
    DisplayColumns001: string[] = ['No', 'ORDER_IDX', 'OR_NO', 'WORK_WEEK', 'LEAD_NO', 'PROJECT', 'TOT_QTY', 'ADJ_AF_QTY', 'CUR_LEADS', 'CT_LEADS', 'CT_LEADS_PR', 'GRP', 'PRT', 'DT', 'MC', 'MC2', 'BUNDLE_SIZE', 'HOOK_RACK', 'WIRE', 'T1_DIR', 'TERM1', 'STRIP1', 'SEAL1', 'CCH_W1', 'ICH_W1', 'T2_DIR', 'TERM2', 'STRIP2', 'SEAL2', 'CCH_W2', 'ICH_W2', 'SP_ST', 'REP', 'DSCN_YN', 'PERFORMN', 'CONDITION', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'FCTRY_NM', 'MTRL_RQUST', 'TORDER_FG', 'TOEXCEL_QTY', 'Save'];
    DisplayColumns002: string[] = ['CHK', 'OR_NO', 'WORK_WEEK', 'CONDITION', 'CREATE_DTM', 'LEAD_NO', 'WIRE', 'QTY_STOCK', 'TOEXCEL_QTY', 'SUM_QTY', 'REM_QTY', 'ACT', 'MC', 'ADJ_AF_QTY', 'TERM1', 'SEAL1', 'TERM2', 'SEAL2', 'CCH_W1', 'ICH_W1', 'CCH_W2', 'ICH_W2', 'DT', 'LS_DATE', 'PROJECT', 'CUR_LEADS', 'CT_LEADS', 'CT_LEADS_PR', 'GRP', 'BUNDLE_SIZE', 'HOOK_RACK', 'T1_DIR', 'STRIP1', 'T2_DIR', 'STRIP2', 'SP_ST', 'REP'];
    DisplayColumns003: string[] = ['CHK', 'OR_NO', 'WORK_WEEK', 'CONDITION', 'TORDER_FG', 'LEAD_NO', 'MTRL_RQUST', 'WIRE', 'QTY_STOCK', 'TOEXCEL_QTY', 'TOT_QTY', 'PERFORMN', 'MC', 'DT', 'LS_DATE', 'ADJ_AF_QTY', 'TERM1', 'SEAL1', 'TERM2', 'SEAL2', 'CCH_W1', 'ICH_W1', 'CCH_W2', 'ICH_W2', 'PROJECT', 'CUR_LEADS', 'CT_LEADS', 'CT_LEADS_PR', 'GRP', 'BUNDLE_SIZE', 'HOOK_RACK', 'T1_DIR', 'STRIP1', 'T2_DIR', 'STRIP2', 'SP_ST', 'DSCN_YN', 'REP', 'ORDER_IDX'];
    

    List: torderlist[] | undefined;
    ListFilter: torderlist[] | undefined;
    ListFilter001: torderlist[] | undefined;
    ListFilter002: torderlist[] | undefined;
    FormData!: torderlist;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/torderlist";
    }
    C02DB_LISECHKAsync() {
        let url = this.APIURL + this.Controller + '/C02DB_LISECHKAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02MC_LISTToListAsync() {
        let url = this.APIURL + this.Controller + '/C02MC_LISTToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02Buttonfind_ClickAsync() {
        let url = this.APIURL + this.Controller + '/C02Buttonfind_ClickAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02Buttonfind_ClickToListAsync() {
        let url = this.APIURL + this.Controller + '/C02Buttonfind_ClickToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02Buttonsave_ClickAsync() {
        let url = this.APIURL + this.Controller + '/C02Buttonsave_ClickAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02Buttondelete_ClickAsync() {
        let url = this.APIURL + this.Controller + '/C02Buttondelete_ClickAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02Buttonsave_ClickGroupAsync() {
        let url = this.APIURL + this.Controller + '/C02Buttonsave_ClickGroupAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02Buttondelete_ClickGroupAsync() {
        let url = this.APIURL + this.Controller + '/C02Buttondelete_ClickGroupAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02Buttonfind_ClickToExcelAsync() {
        let url = this.APIURL + this.Controller + '/C02Buttonfind_ClickToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02_LISTButtonfind_ClickToListAsync() {
        let url = this.APIURL + this.Controller + '/C02_LISTButtonfind_ClickToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02_LISTButtonsave_ClickGroupAsync() {
        let url = this.APIURL + this.Controller + '/C02_LISTButtonsave_ClickGroupAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02_LISTButtondelete_ClickGroupAsync() {
        let url = this.APIURL + this.Controller + '/C02_LISTButtondelete_ClickGroupAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02_LISTButtonfind_ClickToExcelAsync() {
        let url = this.APIURL + this.Controller + '/C02_LISTButtonfind_ClickToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    C02_LISTButton1_ClickToExcelAsync() {
        let url = this.APIURL + this.Controller + '/C02_LISTButton1_ClickToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

