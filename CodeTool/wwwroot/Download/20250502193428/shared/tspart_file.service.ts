import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { tspart_file } from './tspart_file.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class tspart_fileService extends BaseService{
 DisplayColumns001: string[] = ['No', 'PARTFILE_IDX', 'DWG_FILE_GRP', 'FILE_NO', 'FILE_FOLDER', 'FILE_NAME', 'FILE_REMARK', 'FILE_USEYN', 'CREATE_DTM', 'CREATE_USER', 'UPDATE_DTM', 'UPDATE_USER', 'Save'];

    List: tspart_file[] | undefined;
    ListFilter: tspart_file[] | undefined;
    FormData!: tspart_file;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "v1/tspart_file";
    }
}

