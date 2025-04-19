import { Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { Base } from './Base.model';
import { BaseParameter } from './BaseParameter.model';
@Injectable({
    providedIn: 'root'
})
export class BaseService {

    DataSource: MatTableDataSource<any>;
    DataSourceFilter: MatTableDataSource<any>;
    DisplayColumns: string[] = ['STT'];
    DisplayColumns01: string[] = ['STT'];
    DisplayColumnsMobile: string[] = ['STT'];
    List: Base[] | undefined;
    ListFilter: Base[] | undefined;
    FormData!: Base;
    File: File;
    FileToUpload: FileList
    BaseParameter!: BaseParameter;
    IsShowLoading: boolean = false;
    APIURL: string = environment.APIURL;
    Controller: string = "Base";
    Headers: HttpHeaders = new HttpHeaders();


    constructor(
        public httpClient: HttpClient
    ) {
        this.FormData = {
        };
        this.BaseParameter = {
            SearchString: environment.InitializationString,            
            SearchString001: environment.InitializationString,              
            SearchString002: environment.InitializationString,  
            SearchString003: environment.InitializationString,  
            SearchString004: environment.InitializationString,  
            SearchString005: environment.InitializationString,  
            SearchString006: environment.InitializationString,  
        };
        this.List = [];
        this.ListFilter = [];

        let token = localStorage.getItem(environment.Token);
        this.Headers = this.Headers.append('Authorization', 'Bearer ' + token);
    }


    SearchAll(sort: MatSort, paginator: MatPaginator) {
        if (this.BaseParameter.SearchString.length > 0) {
            this.BaseParameter.SearchString = this.BaseParameter.SearchString.trim();
            if (this.DataSource) {
                this.DataSource.filter = this.BaseParameter.SearchString.toLowerCase();
            }
        }
        else {
            this.SearchGetAllAndEmptyToListAsync(sort, paginator);
        }
    }
    Search(sort: MatSort, paginator: MatPaginator) {
        if (this.BaseParameter.SearchString.length > 0) {
            this.BaseParameter.SearchString = this.BaseParameter.SearchString.trim();
            if (this.DataSource) {
                this.DataSource.filter = this.BaseParameter.SearchString.toLowerCase();
            }
        }
        else {
            this.SearchGetAllToListAsync(sort, paginator);
        }
    }
    ComponentGetAllToListAsync(Service: BaseService) {
        if (this.List) {
            if (this.List.length == 0) {
                this.GetAllToListAsync().subscribe(
                    res => {
                        this.List = (res as any[]);
                        this.ListFilter = this.List;
                    },
                    err => {
                    },
                    () => {
                    }
                );
            }
            else {
            }
        }
        else {
        }
    }
    SearchGetAllToListAsync(sort: MatSort, paginator: MatPaginator) {
        this.IsShowLoading = true;
        this.GetAllToListAsync().subscribe(
            res => {
                this.List = (res as any[]);
                this.DataSource = new MatTableDataSource(this.List);
                this.DataSource.sort = sort;
                this.DataSource.paginator = paginator;
            },
            err => {
            },
            () => {
                this.IsShowLoading = false;
            }
        );
    }
    SearchGetAllAndEmptyToListAsync(sort: MatSort, paginator: MatPaginator) {
        this.IsShowLoading = true;
        this.GetAllAndEmptyToListAsync().subscribe(
            res => {
                this.List = (res as any[]);
                this.DataSource = new MatTableDataSource(this.List);
                this.DataSource.sort = sort;
                this.DataSource.paginator = paginator;
            },
            err => {
            },
            () => {
                this.IsShowLoading = false;
            }
        );
    }
    ComponentSaveAll(sort: MatSort, paginator: MatPaginator) {
        this.IsShowLoading = true;
        this.SaveAsync().subscribe(
            res => {
                this.SearchAll(sort, paginator);
                return environment.SaveSuccess;
            },
            err => {
                return environment.SaveNotSuccess;
            },
            () => {
                this.IsShowLoading = false;
            }
        );
        return environment.SaveSuccess;
    }
    ComponentDeleteAll(sort: MatSort, paginator: MatPaginator) {
        if (confirm(environment.DeleteConfirm)) {
            this.IsShowLoading = true;
            this.RemoveAsync().subscribe(
                res => {
                    this.SearchAll(sort, paginator);
                    return environment.SaveSuccess;
                },
                err => {
                    return environment.SaveNotSuccess;
                },
                () => {
                    this.IsShowLoading = false;
                }
            );
            return environment.SaveSuccess;
        }
    }
    SearchBySearchStringAndEmptyToListAsync(sort: MatSort, paginator: MatPaginator) {
        this.IsShowLoading = true;
        this.GetBySearchStringAndEmptyToListAsync().subscribe(
            res => {
                this.List = (res as any[]);
                this.DataSource = new MatTableDataSource(this.List);
                this.DataSource.sort = sort;
                this.DataSource.paginator = paginator;
            },
            err => {
            },
            () => {
                this.IsShowLoading = false;
            }
        );
    }
    ComponentSaveSearchString(sort: MatSort, paginator: MatPaginator) {
        this.IsShowLoading = true;
        this.SaveAsync().subscribe(
            res => {
                this.SearchBySearchStringAndEmptyToListAsync(sort, paginator);
                return environment.SaveSuccess;
            },
            err => {
                return environment.SaveNotSuccess;
            },
            () => {
                this.IsShowLoading = false;
            }
        );
        return environment.SaveSuccess;
    }
    ComponentDeleteSearchString(sort: MatSort, paginator: MatPaginator) {
        if (confirm(environment.DeleteConfirm)) {
            this.IsShowLoading = true;
            this.RemoveAsync().subscribe(
                res => {
                    this.SearchBySearchStringAndEmptyToListAsync(sort, paginator);
                    return environment.SaveSuccess;
                },
                err => {
                    return environment.SaveNotSuccess;
                },
                () => {
                    this.IsShowLoading = false;
                }
            );
            return environment.SaveSuccess;
        }
    }
    Save() {
        let url = this.APIURL + this.Controller + '/Save';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.FormData));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    SaveAsync() {
        let url = this.APIURL + this.Controller + '/SaveAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.FormData));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    Remove() {
        let url = this.APIURL + this.Controller + '/Remove';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.FormData));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    RemoveAsync() {
        let url = this.APIURL + this.Controller + '/RemoveAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.FormData));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }

    GetByID() {
        let url = this.APIURL + this.Controller + '/GetByID';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByIDAsync() {
        let url = this.APIURL + this.Controller + '/GetByIDAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByCode() {
        let url = this.APIURL + this.Controller + '/GetByCode';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByCodeAsync() {
        let url = this.APIURL + this.Controller + '/GetByCodeAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }

    GetAllToList() {
        let url = this.APIURL + this.Controller + '/GetAllToList';
        const formUpload: FormData = new FormData();
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetAllToListAsync() {
        let url = this.APIURL + this.Controller + '/GetAllToListAsync';
        const formUpload: FormData = new FormData();
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }

    GetBySearchStringToList() {
        let url = this.APIURL + this.Controller + '/GetBySearchStringToList';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetBySearchStringToListAsync() {
        let url = this.APIURL + this.Controller + '/GetBySearchStringToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByPageAndPageSizeToList() {
        let url = this.APIURL + this.Controller + '/GetByPageAndPageSizeToList';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByPageAndPageSizeToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByPageAndPageSizeToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }

    GetAllAndEmptyToList() {
        let url = this.APIURL + this.Controller + '/GetAllAndEmptyToList';
        const formUpload: FormData = new FormData();
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetAllAndEmptyToListAsync() {
        let url = this.APIURL + this.Controller + '/GetAllAndEmptyToListAsync';
        const formUpload: FormData = new FormData();
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetBySearchStringAndEmptyToList() {
        let url = this.APIURL + this.Controller + '/GetBySearchStringAndEmptyToList';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetBySearchStringAndEmptyToListAsync() {
        let url = this.APIURL + this.Controller + '/GetBySearchStringAndEmptyToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

