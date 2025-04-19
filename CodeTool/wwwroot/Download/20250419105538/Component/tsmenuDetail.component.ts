import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsmenu } from 'src/app/shared/MES/tsmenu.model';
import { tsmenuService } from 'src/app/shared/MES/tsmenu.service';

@Component({
  selector: 'app-tsmenu-info',
  templateUrl: './tsmenu-info.component.html',
  styleUrls: ['./tsmenu-info.component.css']
})
export class tsmenuDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tsmenuDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsmenuService: tsmenuService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tsmenuSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tsmenuSearch() {
    this.tsmenuService.GetByIDAsync().subscribe(
    res => {
    this.tsmenuService.FormData = res as tsmenu;
    if (this.tsmenuService.FormData.MENU_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tsmenuSave() {
    this.tsmenuService.IsShowLoading = true;
    this.tsmenuService.SaveAsync().subscribe(
    res => {
    this.tsmenuService.FormData = res as tsmenu;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tsmenuService.IsShowLoading = false;
    }
    );
    }
    }

