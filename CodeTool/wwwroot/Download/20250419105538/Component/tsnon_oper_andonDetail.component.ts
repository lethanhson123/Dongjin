import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnon_oper_andon } from 'src/app/shared/MES/tsnon_oper_andon.model';
import { tsnon_oper_andonService } from 'src/app/shared/MES/tsnon_oper_andon.service';

@Component({
  selector: 'app-tsnon_oper_andon-info',
  templateUrl: './tsnon_oper_andon-info.component.html',
  styleUrls: ['./tsnon_oper_andon-info.component.css']
})
export class tsnon_oper_andonDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tsnon_oper_andonDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnon_oper_andonService: tsnon_oper_andonService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tsnon_oper_andonSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tsnon_oper_andonSearch() {
    this.tsnon_oper_andonService.GetByIDAsync().subscribe(
    res => {
    this.tsnon_oper_andonService.FormData = res as tsnon_oper_andon;
    if (this.tsnon_oper_andonService.FormData.TSNON_OPER_MITOR_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tsnon_oper_andonSave() {
    this.tsnon_oper_andonService.IsShowLoading = true;
    this.tsnon_oper_andonService.SaveAsync().subscribe(
    res => {
    this.tsnon_oper_andonService.FormData = res as tsnon_oper_andon;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tsnon_oper_andonService.IsShowLoading = false;
    }
    );
    }
    }

