import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tiivaj_history } from 'src/app/shared/MES/tiivaj_history.model';
import { tiivaj_historyService } from 'src/app/shared/MES/tiivaj_history.service';

@Component({
  selector: 'app-tiivaj_history-info',
  templateUrl: './tiivaj_history-info.component.html',
  styleUrls: ['./tiivaj_history-info.component.css']
})
export class tiivaj_historyDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tiivaj_historyDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tiivaj_historyService: tiivaj_historyService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tiivaj_historySearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tiivaj_historySearch() {
    this.tiivaj_historyService.GetByIDAsync().subscribe(
    res => {
    this.tiivaj_historyService.FormData = res as tiivaj_history;
    if (this.tiivaj_historyService.FormData.IVAJ_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tiivaj_historySave() {
    this.tiivaj_historyService.IsShowLoading = true;
    this.tiivaj_historyService.SaveAsync().subscribe(
    res => {
    this.tiivaj_historyService.FormData = res as tiivaj_history;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tiivaj_historyService.IsShowLoading = false;
    }
    );
    }
    }

