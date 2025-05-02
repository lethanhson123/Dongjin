import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_lead_bom } from 'src/app/shared/MES/torder_lead_bom.model';
import { torder_lead_bomService } from 'src/app/shared/MES/torder_lead_bom.service';

@Component({
  selector: 'app-torder_lead_bom-info',
  templateUrl: './torder_lead_bom-info.component.html',
  styleUrls: ['./torder_lead_bom-info.component.css']
})
export class torder_lead_bomDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torder_lead_bomDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_lead_bomService: torder_lead_bomService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torder_lead_bomSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torder_lead_bomSearch() {
    this.torder_lead_bomService.GetByIDAsync().subscribe(
    res => {
    this.torder_lead_bomService.FormData = res as torder_lead_bom;
    if (this.torder_lead_bomService.FormData.LEAD_INDEX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torder_lead_bomSave() {
    this.torder_lead_bomService.IsShowLoading = true;
    this.torder_lead_bomService.SaveAsync().subscribe(
    res => {
    this.torder_lead_bomService.FormData = res as torder_lead_bom;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torder_lead_bomService.IsShowLoading = false;
    }
    );
    }
    }

