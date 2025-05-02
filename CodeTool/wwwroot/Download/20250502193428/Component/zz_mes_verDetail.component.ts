import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { zz_mes_ver } from 'src/app/shared/MES/zz_mes_ver.model';
import { zz_mes_verService } from 'src/app/shared/MES/zz_mes_ver.service';

@Component({
  selector: 'app-zz_mes_ver-info',
  templateUrl: './zz_mes_ver-info.component.html',
  styleUrls: ['./zz_mes_ver-info.component.css']
})
export class zz_mes_verDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<zz_mes_verDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public zz_mes_verService: zz_mes_verService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.zz_mes_verSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    zz_mes_verSearch() {
    this.zz_mes_verService.GetByIDAsync().subscribe(
    res => {
    this.zz_mes_verService.FormData = res as zz_mes_ver;
    if (this.zz_mes_verService.FormData.VER_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    zz_mes_verSave() {
    this.zz_mes_verService.IsShowLoading = true;
    this.zz_mes_verService.SaveAsync().subscribe(
    res => {
    this.zz_mes_verService.FormData = res as zz_mes_ver;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.zz_mes_verService.IsShowLoading = false;
    }
    );
    }
    }

