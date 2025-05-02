import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_tdpdmtim_tmp_out } from 'src/app/shared/MES/kr_tdpdmtim_tmp_out.model';
import { kr_tdpdmtim_tmp_outService } from 'src/app/shared/MES/kr_tdpdmtim_tmp_out.service';

@Component({
  selector: 'app-kr_tdpdmtim_tmp_out-info',
  templateUrl: './kr_tdpdmtim_tmp_out-info.component.html',
  styleUrls: ['./kr_tdpdmtim_tmp_out-info.component.css']
})
export class kr_tdpdmtim_tmp_outDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<kr_tdpdmtim_tmp_outDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_tdpdmtim_tmp_outService: kr_tdpdmtim_tmp_outService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.kr_tdpdmtim_tmp_outSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    kr_tdpdmtim_tmp_outSearch() {
    this.kr_tdpdmtim_tmp_outService.GetByIDAsync().subscribe(
    res => {
    this.kr_tdpdmtim_tmp_outService.FormData = res as kr_tdpdmtim_tmp_out;
    if (this.kr_tdpdmtim_tmp_outService.FormData.PDMTIN_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    kr_tdpdmtim_tmp_outSave() {
    this.kr_tdpdmtim_tmp_outService.IsShowLoading = true;
    this.kr_tdpdmtim_tmp_outService.SaveAsync().subscribe(
    res => {
    this.kr_tdpdmtim_tmp_outService.FormData = res as kr_tdpdmtim_tmp_out;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.kr_tdpdmtim_tmp_outService.IsShowLoading = false;
    }
    );
    }
    }

