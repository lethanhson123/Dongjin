import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_asset_mm } from 'src/app/shared/MES/pd_asset_mm.model';
import { pd_asset_mmService } from 'src/app/shared/MES/pd_asset_mm.service';

@Component({
  selector: 'app-pd_asset_mm-info',
  templateUrl: './pd_asset_mm-info.component.html',
  styleUrls: ['./pd_asset_mm-info.component.css']
})
export class pd_asset_mmDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<pd_asset_mmDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_asset_mmService: pd_asset_mmService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.pd_asset_mmSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    pd_asset_mmSearch() {
    this.pd_asset_mmService.GetByIDAsync().subscribe(
    res => {
    this.pd_asset_mmService.FormData = res as pd_asset_mm;
    if (this.pd_asset_mmService.FormData.PD_ASSET_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    pd_asset_mmSave() {
    this.pd_asset_mmService.IsShowLoading = true;
    this.pd_asset_mmService.SaveAsync().subscribe(
    res => {
    this.pd_asset_mmService.FormData = res as pd_asset_mm;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.pd_asset_mmService.IsShowLoading = false;
    }
    );
    }
    }

