import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { zadmin_function } from './zadmin_function.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class zadmin_functionService extends BaseService{
 DisplayColumns001: string[] = ['No', 'ZADMIN_FUNCTION_IDX', 'ZADMIN_FUNCTION_CODE', 'ZADMIN_FUNCTION_NAME', 'ZADMIN_FUNCTION_YN', 'ZADMIN_FUNCTION_DATE', 'ZADMIN_FUNCTION_REMARK', 'Save'];

    List: zadmin_function[] | undefined;
    ListFilter: zadmin_function[] | undefined;
    FormData!: zadmin_function;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "zadmin_function";
    }
}

