import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_spc } from 'src/app/shared/MES/torder_spc.model';
import { torder_spcService } from 'src/app/shared/MES/torder_spc.service';

@Component({
  selector: 'app-torder_spc-info',
  templateUrl: './torder_spc-info.component.html',
  styleUrls: ['./torder_spc-info.component.css']
})
export class torder_spcDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torder_spcDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_spcService: torder_spcService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torder_spcSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torder_spcSearch() {
    this.torder_spcService.GetByIDAsync().subscribe(
    res => {
    this.torder_spcService.FormData = res as torder_spc;
    if (this.torder_spcService.FormData.SPC_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torder_spcSave() {
    this.torder_spcService.IsShowLoading = true;
    this.torder_spcService.SaveAsync().subscribe(
    res => {
    this.torder_spcService.FormData = res as torder_spc;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torder_spcService.IsShowLoading = false;
    }
    );
    }
    }

