import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_lead_bom_spst } from 'src/app/shared/MES/torder_lead_bom_spst.model';
import { torder_lead_bom_spstService } from 'src/app/shared/MES/torder_lead_bom_spst.service';

@Component({
  selector: 'app-torder_lead_bom_spst-info',
  templateUrl: './torder_lead_bom_spst-info.component.html',
  styleUrls: ['./torder_lead_bom_spst-info.component.css']
})
export class torder_lead_bom_spstDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torder_lead_bom_spstDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_lead_bom_spstService: torder_lead_bom_spstService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torder_lead_bom_spstSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torder_lead_bom_spstSearch() {
    this.torder_lead_bom_spstService.GetByIDAsync().subscribe(
    res => {
    this.torder_lead_bom_spstService.FormData = res as torder_lead_bom_spst;
    if (this.torder_lead_bom_spstService.FormData.SPST_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torder_lead_bom_spstSave() {
    this.torder_lead_bom_spstService.IsShowLoading = true;
    this.torder_lead_bom_spstService.SaveAsync().subscribe(
    res => {
    this.torder_lead_bom_spstService.FormData = res as torder_lead_bom_spst;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torder_lead_bom_spstService.IsShowLoading = false;
    }
    );
    }
    }

