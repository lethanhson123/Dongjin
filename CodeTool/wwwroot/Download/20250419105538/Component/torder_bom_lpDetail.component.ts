import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_bom_lp } from 'src/app/shared/MES/torder_bom_lp.model';
import { torder_bom_lpService } from 'src/app/shared/MES/torder_bom_lp.service';

@Component({
  selector: 'app-torder_bom_lp-info',
  templateUrl: './torder_bom_lp-info.component.html',
  styleUrls: ['./torder_bom_lp-info.component.css']
})
export class torder_bom_lpDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torder_bom_lpDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_bom_lpService: torder_bom_lpService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torder_bom_lpSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torder_bom_lpSearch() {
    this.torder_bom_lpService.GetByIDAsync().subscribe(
    res => {
    this.torder_bom_lpService.FormData = res as torder_bom_lp;
    if (this.torder_bom_lpService.FormData.TORDER_BOM_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torder_bom_lpSave() {
    this.torder_bom_lpService.IsShowLoading = true;
    this.torder_bom_lpService.SaveAsync().subscribe(
    res => {
    this.torder_bom_lpService.FormData = res as torder_bom_lp;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torder_bom_lpService.IsShowLoading = false;
    }
    );
    }
    }

