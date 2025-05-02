import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdotpl_aloc } from 'src/app/shared/MES/tdpdotpl_aloc.model';
import { tdpdotpl_alocService } from 'src/app/shared/MES/tdpdotpl_aloc.service';

@Component({
  selector: 'app-tdpdotpl_aloc-info',
  templateUrl: './tdpdotpl_aloc-info.component.html',
  styleUrls: ['./tdpdotpl_aloc-info.component.css']
})
export class tdpdotpl_alocDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tdpdotpl_alocDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdotpl_alocService: tdpdotpl_alocService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tdpdotpl_alocSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tdpdotpl_alocSearch() {
    this.tdpdotpl_alocService.GetByIDAsync().subscribe(
    res => {
    this.tdpdotpl_alocService.FormData = res as tdpdotpl_aloc;
    if (this.tdpdotpl_alocService.FormData.PDOTPL_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tdpdotpl_alocSave() {
    this.tdpdotpl_alocService.IsShowLoading = true;
    this.tdpdotpl_alocService.SaveAsync().subscribe(
    res => {
    this.tdpdotpl_alocService.FormData = res as tdpdotpl_aloc;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tdpdotpl_alocService.IsShowLoading = false;
    }
    );
    }
    }

