import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnon_oper } from 'src/app/shared/MES/tsnon_oper.model';
import { tsnon_operService } from 'src/app/shared/MES/tsnon_oper.service';

@Component({
  selector: 'app-tsnon_oper-info',
  templateUrl: './tsnon_oper-info.component.html',
  styleUrls: ['./tsnon_oper-info.component.css']
})
export class tsnon_operDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tsnon_operDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnon_operService: tsnon_operService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tsnon_operSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tsnon_operSearch() {
    this.tsnon_operService.GetByIDAsync().subscribe(
    res => {
    this.tsnon_operService.FormData = res as tsnon_oper;
    if (this.tsnon_operService.FormData.TSNON_OPER_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tsnon_operSave() {
    this.tsnon_operService.IsShowLoading = true;
    this.tsnon_operService.SaveAsync().subscribe(
    res => {
    this.tsnon_operService.FormData = res as tsnon_oper;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tsnon_operService.IsShowLoading = false;
    }
    );
    }
    }

