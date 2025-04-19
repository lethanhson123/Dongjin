import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pdpusch } from './pdpusch.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class pdpuschService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PDPUSCH_IDX', 'PDP_CONF', 'PDP_FACT', 'PDP_NO', 'PDP_COMPY_NO', 'PDP_DATE1', 'PDP_DEPA', 'PDP_PART', 'PDP_QTY', 'PDP_MEMO', 'PDP_REC_YN', 'PDP_CMPY', 'PDP_DATE2', 'PDP_COST', 'PDP_VAT', 'PDP_ECTCOST', 'PDP_TOTCOST', 'PDP_CNF_DATE', 'PDP_CNF_YN', 'PDP_ORD_ST', 'PDP_REMARK', 'PDP_BE_COST', 'PDP_INCO_DT', 'PDP_IN_QTY', 'PDP_FIFO', 'PDP_PRIENT', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: pdpusch[] | undefined;
    ListFilter: pdpusch[] | undefined;
    FormData!: pdpusch;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "pdpusch";
    }
}

