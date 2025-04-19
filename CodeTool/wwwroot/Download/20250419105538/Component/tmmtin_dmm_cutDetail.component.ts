import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmmtin_dmm_cut } from 'src/app/shared/MES/tmmtin_dmm_cut.model';
import { tmmtin_dmm_cutService } from 'src/app/shared/MES/tmmtin_dmm_cut.service';

@Component({
  selector: 'app-tmmtin_dmm_cut-info',
  templateUrl: './tmmtin_dmm_cut-info.component.html',
  styleUrls: ['./tmmtin_dmm_cut-info.component.css']
})
export class tmmtin_dmm_cutDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tmmtin_dmm_cutDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmmtin_dmm_cutService: tmmtin_dmm_cutService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tmmtin_dmm_cutSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tmmtin_dmm_cutSearch() {
    this.tmmtin_dmm_cutService.GetByIDAsync().subscribe(
    res => {
    this.tmmtin_dmm_cutService.FormData = res as tmmtin_dmm_cut;
    if (this.tmmtin_dmm_cutService.FormData.TMMTIN_DMM_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tmmtin_dmm_cutSave() {
    this.tmmtin_dmm_cutService.IsShowLoading = true;
    this.tmmtin_dmm_cutService.SaveAsync().subscribe(
    res => {
    this.tmmtin_dmm_cutService.FormData = res as tmmtin_dmm_cut;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tmmtin_dmm_cutService.IsShowLoading = false;
    }
    );
    }
    }

