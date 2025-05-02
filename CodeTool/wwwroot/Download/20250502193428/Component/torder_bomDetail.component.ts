import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_bom } from 'src/app/shared/MES/torder_bom.model';
import { torder_bomService } from 'src/app/shared/MES/torder_bom.service';

@Component({
  selector: 'app-torder_bom-info',
  templateUrl: './torder_bom-info.component.html',
  styleUrls: ['./torder_bom-info.component.css']
})
export class torder_bomDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torder_bomDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_bomService: torder_bomService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torder_bomSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torder_bomSearch() {
    this.torder_bomService.GetByIDAsync().subscribe(
    res => {
    this.torder_bomService.FormData = res as torder_bom;
    if (this.torder_bomService.FormData.TORDER_BOM_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torder_bomSave() {
    this.torder_bomService.IsShowLoading = true;
    this.torder_bomService.SaveAsync().subscribe(
    res => {
    this.torder_bomService.FormData = res as torder_bom;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torder_bomService.IsShowLoading = false;
    }
    );
    }
    }

