import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivtr_history } from 'src/app/shared/MES/tiivtr_history.model';
import { tiivtr_historyService } from 'src/app/shared/MES/tiivtr_history.service';

@Component({
  selector: 'app-tiivtr_history-info',
  templateUrl: './tiivtr_history-info.component.html',
  styleUrls: ['./tiivtr_history-info.component.css']
})
export class tiivtr_historyDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tiivtr_historyDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivtr_historyService: tiivtr_historyService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tiivtr_historySearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tiivtr_historySearch() {
    this.tiivtr_historyService.GetByIDAsync().subscribe(
    res => {
    this.tiivtr_historyService.FormData = res as tiivtr_history;
    if (this.tiivtr_historyService.FormData.IV_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tiivtr_historySave() {
    this.tiivtr_historyService.IsShowLoading = true;
    this.tiivtr_historyService.SaveAsync().subscribe(
    res => {
    this.tiivtr_historyService.FormData = res as tiivtr_history;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tiivtr_historyService.IsShowLoading = false;
    }
    );
    }
    }

