import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom_ver02_po } from 'src/app/shared/MES/tsbom_ver02_po.model';
import { tsbom_ver02_poService } from 'src/app/shared/MES/tsbom_ver02_po.service';

@Component({
  selector: 'app-tsbom_ver02_po-info',
  templateUrl: './tsbom_ver02_po-info.component.html',
  styleUrls: ['./tsbom_ver02_po-info.component.css']
})
export class tsbom_ver02_poDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tsbom_ver02_poDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbom_ver02_poService: tsbom_ver02_poService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tsbom_ver02_poSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tsbom_ver02_poSearch() {
    this.tsbom_ver02_poService.GetByIDAsync().subscribe(
    res => {
    this.tsbom_ver02_poService.FormData = res as tsbom_ver02_po;
    if (this.tsbom_ver02_poService.FormData.BOM_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tsbom_ver02_poSave() {
    this.tsbom_ver02_poService.IsShowLoading = true;
    this.tsbom_ver02_poService.SaveAsync().subscribe(
    res => {
    this.tsbom_ver02_poService.FormData = res as tsbom_ver02_po;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tsbom_ver02_poService.IsShowLoading = false;
    }
    );
    }
    }

