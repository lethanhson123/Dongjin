import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_bom_not_climp } from 'src/app/shared/MES/torder_bom_not_climp.model';
import { torder_bom_not_climpService } from 'src/app/shared/MES/torder_bom_not_climp.service';

@Component({
  selector: 'app-torder_bom_not_climp-info',
  templateUrl: './torder_bom_not_climp-info.component.html',
  styleUrls: ['./torder_bom_not_climp-info.component.css']
})
export class torder_bom_not_climpDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<torder_bom_not_climpDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_bom_not_climpService: torder_bom_not_climpService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.torder_bom_not_climpSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    torder_bom_not_climpSearch() {
    this.torder_bom_not_climpService.GetByIDAsync().subscribe(
    res => {
    this.torder_bom_not_climpService.FormData = res as torder_bom_not_climp;
    if (this.torder_bom_not_climpService.FormData.CLIMP_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    torder_bom_not_climpSave() {
    this.torder_bom_not_climpService.IsShowLoading = true;
    this.torder_bom_not_climpService.SaveAsync().subscribe(
    res => {
    this.torder_bom_not_climpService.FormData = res as torder_bom_not_climp;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.torder_bom_not_climpService.IsShowLoading = false;
    }
    );
    }
    }

