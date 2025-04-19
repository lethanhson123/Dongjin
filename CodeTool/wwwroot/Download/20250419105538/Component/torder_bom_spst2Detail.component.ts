import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_bom_spst2 } from 'src/app/shared/MES/torder_bom_spst2.model';
import { torder_bom_spst2Service } from 'src/app/shared/MES/torder_bom_spst2.service';

@Component({
  selector: 'app-torder_bom_spst2-info',
  templateUrl: './torder_bom_spst2-info.component.html',
  styleUrls: ['./torder_bom_spst2-info.component.css']
})
export class torder_bom_spst2DetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torder_bom_spst2DetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_bom_spst2Service: torder_bom_spst2Service,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torder_bom_spst2Search();
    }
    Close() {
    this.DialogRef.close();
    }
    torder_bom_spst2Search() {
    this.torder_bom_spst2Service.GetByIDAsync().subscribe(
    res => {
    this.torder_bom_spst2Service.FormData = res as torder_bom_spst2;
    if (this.torder_bom_spst2Service.FormData.TORDER_BOMSPST2_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torder_bom_spst2Save() {
    this.torder_bom_spst2Service.IsShowLoading = true;
    this.torder_bom_spst2Service.SaveAsync().subscribe(
    res => {
    this.torder_bom_spst2Service.FormData = res as torder_bom_spst2;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torder_bom_spst2Service.IsShowLoading = false;
    }
    );
    }
    }

