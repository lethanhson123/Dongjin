import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscut_st_uph } from 'src/app/shared/MES/tscut_st_uph.model';
import { tscut_st_uphService } from 'src/app/shared/MES/tscut_st_uph.service';

@Component({
  selector: 'app-tscut_st_uph-info',
  templateUrl: './tscut_st_uph-info.component.html',
  styleUrls: ['./tscut_st_uph-info.component.css']
})
export class tscut_st_uphDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tscut_st_uphDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscut_st_uphService: tscut_st_uphService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tscut_st_uphSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tscut_st_uphSearch() {
    this.tscut_st_uphService.GetByIDAsync().subscribe(
    res => {
    this.tscut_st_uphService.FormData = res as tscut_st_uph;
    if (this.tscut_st_uphService.FormData.TSCUT_ST_UPH_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tscut_st_uphSave() {
    this.tscut_st_uphService.IsShowLoading = true;
    this.tscut_st_uphService.SaveAsync().subscribe(
    res => {
    this.tscut_st_uphService.FormData = res as tscut_st_uph;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tscut_st_uphService.IsShowLoading = false;
    }
    );
    }
    }

