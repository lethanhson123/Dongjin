import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { kr_inspctn_test } from './kr_inspctn_test.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class kr_inspctn_testService extends BaseService{
 DisplayColumns001: string[] = ['No', 'KR_INSPCTN_TEST_IDX', 'KR_INSPCTN_CODE', 'KR_INSPCTN_PARTIDX', 'KR_INSPCTN_IDX', 'KR_INSPCTN_DATE', 'KR_INSPCTN_TEXT', 'KR_INSPCTN_N', 'KR_INSPCTN_X1', 'KR_INSPCTN_X2', 'KR_INSPCTN_X3', 'KR_INSPCTN_X4', 'KR_INSPCTN_X5', 'KR_INSPCTN_RUS', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: kr_inspctn_test[] | undefined;
    ListFilter: kr_inspctn_test[] | undefined;
    FormData!: kr_inspctn_test;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "kr_inspctn_test";
    }
}

