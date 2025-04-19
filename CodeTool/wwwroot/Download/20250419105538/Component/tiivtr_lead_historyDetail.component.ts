import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivtr_lead_history } from 'src/app/shared/MES/tiivtr_lead_history.model';
import { tiivtr_lead_historyService } from 'src/app/shared/MES/tiivtr_lead_history.service';

@Component({
  selector: 'app-tiivtr_lead_history-info',
  templateUrl: './tiivtr_lead_history-info.component.html',
  styleUrls: ['./tiivtr_lead_history-info.component.css']
})
export class tiivtr_lead_historyDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tiivtr_lead_historyDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivtr_lead_historyService: tiivtr_lead_historyService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tiivtr_lead_historySearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tiivtr_lead_historySearch() {
    this.tiivtr_lead_historyService.GetByIDAsync().subscribe(
    res => {
    this.tiivtr_lead_historyService.FormData = res as tiivtr_lead_history;
    if (this.tiivtr_lead_historyService.FormData.IV_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tiivtr_lead_historySave() {
    this.tiivtr_lead_historyService.IsShowLoading = true;
    this.tiivtr_lead_historyService.SaveAsync().subscribe(
    res => {
    this.tiivtr_lead_historyService.FormData = res as tiivtr_lead_history;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tiivtr_lead_historyService.IsShowLoading = false;
    }
    );
    }
    }

