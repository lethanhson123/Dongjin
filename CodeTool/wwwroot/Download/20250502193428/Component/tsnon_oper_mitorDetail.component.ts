import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnon_oper_mitor } from 'src/app/shared/MES/tsnon_oper_mitor.model';
import { tsnon_oper_mitorService } from 'src/app/shared/MES/tsnon_oper_mitor.service';

@Component({
  selector: 'app-tsnon_oper_mitor-info',
  templateUrl: './tsnon_oper_mitor-info.component.html',
  styleUrls: ['./tsnon_oper_mitor-info.component.css']
})
export class tsnon_oper_mitorDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tsnon_oper_mitorDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnon_oper_mitorService: tsnon_oper_mitorService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tsnon_oper_mitorSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tsnon_oper_mitorSearch() {
    this.tsnon_oper_mitorService.GetByIDAsync().subscribe(
    res => {
    this.tsnon_oper_mitorService.FormData = res as tsnon_oper_mitor;
    if (this.tsnon_oper_mitorService.FormData.TSNON_OPER_MITOR_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tsnon_oper_mitorSave() {
    this.tsnon_oper_mitorService.IsShowLoading = true;
    this.tsnon_oper_mitorService.SaveAsync().subscribe(
    res => {
    this.tsnon_oper_mitorService.FormData = res as tsnon_oper_mitor;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tsnon_oper_mitorService.IsShowLoading = false;
    }
    );
    }
    }

