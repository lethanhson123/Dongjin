import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdotpl } from 'src/app/shared/MES/tdpdotpl.model';
import { tdpdotplService } from 'src/app/shared/MES/tdpdotpl.service';

@Component({
  selector: 'app-tdpdotpl-info',
  templateUrl: './tdpdotpl-info.component.html',
  styleUrls: ['./tdpdotpl-info.component.css']
})
export class tdpdotplDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tdpdotplDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdotplService: tdpdotplService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tdpdotplSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tdpdotplSearch() {
    this.tdpdotplService.GetByIDAsync().subscribe(
    res => {
    this.tdpdotplService.FormData = res as tdpdotpl;
    if (this.tdpdotplService.FormData.PDOTPL_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tdpdotplSave() {
    this.tdpdotplService.IsShowLoading = true;
    this.tdpdotplService.SaveAsync().subscribe(
    res => {
    this.tdpdotplService.FormData = res as tdpdotpl;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tdpdotplService.IsShowLoading = false;
    }
    );
    }
    }

