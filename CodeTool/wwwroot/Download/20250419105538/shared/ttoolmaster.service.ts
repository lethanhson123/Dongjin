import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ttoolmaster } from './ttoolmaster.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ttoolmasterService extends BaseService{
 DisplayColumns001: string[] = ['No', 'TOOL_IDX', 'APPLICATOR', 'SEQ_TOT', 'TOO_SUPPLY', 'MAX_CNT', 'TOT_WK_CNT', 'WK_CNT', 'SPP_NO', 'TYPE', 'GAUGE', 'COPL_NOR', 'COPL_SPE', 'INSPL_SEALTYPE', 'INSPL_NONSEAL', 'INSPL_XTYPE', 'INSPL_KTYPE', 'INSPL_SPE', 'ANVIL_NOR', 'ANVIL_SPE', 'CMU_NOR', 'CMU_SPE', 'IMU_NOR', 'IMU_NONSEAL', 'IMU_SPE', 'CUTPL_ONE', 'CUTPL_DET', 'CUTAN_ONE', 'CUTAN_DET', 'CUTHO_ONE', 'CUTHO_DET', 'RRBLK_ONE', 'RRBLK_DET', 'RRCUTHO_ONE', 'RRCUTHO_DET', 'FRCUTHO_ONE', 'FRCUTHO_DET', 'RRCUTAN_ONE', 'RRCUTAN_DET', 'WRDN_ONE', 'WRDN_DET', 'DESC', 'COMB_CODE', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: ttoolmaster[] | undefined;
    ListFilter: ttoolmaster[] | undefined;
    FormData!: ttoolmaster;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ttoolmaster";
    }
}

