import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim_autobc_list } from 'src/app/shared/MES/tdpdmtim_autobc_list.model';
import { tdpdmtim_autobc_listService } from 'src/app/shared/MES/tdpdmtim_autobc_list.service';

@Component({
  selector: 'app-tdpdmtim_autobc_list-info',
  templateUrl: './tdpdmtim_autobc_list-info.component.html',
  styleUrls: ['./tdpdmtim_autobc_list-info.component.css']
})
export class tdpdmtim_autobc_listDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tdpdmtim_autobc_listDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtim_autobc_listService: tdpdmtim_autobc_listService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tdpdmtim_autobc_listSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tdpdmtim_autobc_listSearch() {
    this.tdpdmtim_autobc_listService.GetByIDAsync().subscribe(
    res => {
    this.tdpdmtim_autobc_listService.FormData = res as tdpdmtim_autobc_list;
    if (this.tdpdmtim_autobc_listService.FormData.PDMTINABC_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tdpdmtim_autobc_listSave() {
    this.tdpdmtim_autobc_listService.IsShowLoading = true;
    this.tdpdmtim_autobc_listService.SaveAsync().subscribe(
    res => {
    this.tdpdmtim_autobc_listService.FormData = res as tdpdmtim_autobc_list;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tdpdmtim_autobc_listService.IsShowLoading = false;
    }
    );
    }
    }

