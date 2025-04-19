import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttensilbndlst } from 'src/app/shared/MES/ttensilbndlst.model';
import { ttensilbndlstService } from 'src/app/shared/MES/ttensilbndlst.service';

@Component({
  selector: 'app-ttensilbndlst-info',
  templateUrl: './ttensilbndlst-info.component.html',
  styleUrls: ['./ttensilbndlst-info.component.css']
})
export class ttensilbndlstDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<ttensilbndlstDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttensilbndlstService: ttensilbndlstService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.ttensilbndlstSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    ttensilbndlstSearch() {
    this.ttensilbndlstService.GetByIDAsync().subscribe(
    res => {
    this.ttensilbndlstService.FormData = res as ttensilbndlst;
    if (this.ttensilbndlstService.FormData.BNDLST_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    ttensilbndlstSave() {
    this.ttensilbndlstService.IsShowLoading = true;
    this.ttensilbndlstService.SaveAsync().subscribe(
    res => {
    this.ttensilbndlstService.FormData = res as ttensilbndlst;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.ttensilbndlstService.IsShowLoading = false;
    }
    );
    }
    }

