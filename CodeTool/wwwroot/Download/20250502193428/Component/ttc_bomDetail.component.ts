import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttc_bom } from 'src/app/shared/MES/ttc_bom.model';
import { ttc_bomService } from 'src/app/shared/MES/ttc_bom.service';

@Component({
  selector: 'app-ttc_bom-info',
  templateUrl: './ttc_bom-info.component.html',
  styleUrls: ['./ttc_bom-info.component.css']
})
export class ttc_bomDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<ttc_bomDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttc_bomService: ttc_bomService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.ttc_bomSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    ttc_bomSearch() {
    this.ttc_bomService.GetByIDAsync().subscribe(
    res => {
    this.ttc_bomService.FormData = res as ttc_bom;
    if (this.ttc_bomService.FormData.TTC_BOM_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    ttc_bomSave() {
    this.ttc_bomService.IsShowLoading = true;
    this.ttc_bomService.SaveAsync().subscribe(
    res => {
    this.ttc_bomService.FormData = res as ttc_bom;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.ttc_bomService.IsShowLoading = false;
    }
    );
    }
    }

