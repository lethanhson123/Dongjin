import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim_loc } from 'src/app/shared/MES/tdpdmtim_loc.model';
import { tdpdmtim_locService } from 'src/app/shared/MES/tdpdmtim_loc.service';

@Component({
  selector: 'app-tdpdmtim_loc-info',
  templateUrl: './tdpdmtim_loc-info.component.html',
  styleUrls: ['./tdpdmtim_loc-info.component.css']
})
export class tdpdmtim_locDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tdpdmtim_locDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtim_locService: tdpdmtim_locService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tdpdmtim_locSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tdpdmtim_locSearch() {
    this.tdpdmtim_locService.GetByIDAsync().subscribe(
    res => {
    this.tdpdmtim_locService.FormData = res as tdpdmtim_loc;
    if (this.tdpdmtim_locService.FormData.TDLOC_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tdpdmtim_locSave() {
    this.tdpdmtim_locService.IsShowLoading = true;
    this.tdpdmtim_locService.SaveAsync().subscribe(
    res => {
    this.tdpdmtim_locService.FormData = res as tdpdmtim_loc;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tdpdmtim_locService.IsShowLoading = false;
    }
    );
    }
    }

