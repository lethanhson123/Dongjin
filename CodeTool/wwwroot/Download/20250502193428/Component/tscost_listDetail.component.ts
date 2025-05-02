import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscost_list } from 'src/app/shared/MES/tscost_list.model';
import { tscost_listService } from 'src/app/shared/MES/tscost_list.service';

@Component({
  selector: 'app-tscost_list-info',
  templateUrl: './tscost_list-info.component.html',
  styleUrls: ['./tscost_list-info.component.css']
})
export class tscost_listDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tscost_listDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscost_listService: tscost_listService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tscost_listSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tscost_listSearch() {
    this.tscost_listService.GetByIDAsync().subscribe(
    res => {
    this.tscost_listService.FormData = res as tscost_list;
    if (this.tscost_listService.FormData.TSCOST_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tscost_listSave() {
    this.tscost_listService.IsShowLoading = true;
    this.tscost_listService.SaveAsync().subscribe(
    res => {
    this.tscost_listService.FormData = res as tscost_list;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tscost_listService.IsShowLoading = false;
    }
    );
    }
    }

