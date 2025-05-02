import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnon_oper_andon_list } from 'src/app/shared/MES/tsnon_oper_andon_list.model';
import { tsnon_oper_andon_listService } from 'src/app/shared/MES/tsnon_oper_andon_list.service';

@Component({
  selector: 'app-tsnon_oper_andon_list-info',
  templateUrl: './tsnon_oper_andon_list-info.component.html',
  styleUrls: ['./tsnon_oper_andon_list-info.component.css']
})
export class tsnon_oper_andon_listDetailComponent implements OnInit {

  constructor(
    public DialogRef: MatDialogRef<tsnon_oper_andon_listDetailComponent>,    
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnon_oper_andon_listService: tsnon_oper_andon_listService,
    ) {
    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
    //this.tsnon_oper_andon_listSearch();
    }
    Close() {
    this.DialogRef.close();
    }
    tsnon_oper_andon_listSearch() {
    this.tsnon_oper_andon_listService.GetByIDAsync().subscribe(
    res => {
    this.tsnon_oper_andon_listService.FormData = res as tsnon_oper_andon_list;
    if (this.tsnon_oper_andon_listService.FormData.TSNON_OPER_MITOR_IDX == environment.InitializationNumber) {
    }
    },
    err => {
    }
    );
    }
    tsnon_oper_andon_listSave() {
    this.tsnon_oper_andon_listService.IsShowLoading = true;
    this.tsnon_oper_andon_listService.SaveAsync().subscribe(
    res => {
    this.tsnon_oper_andon_listService.FormData = res as tsnon_oper_andon_list;
    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.tsnon_oper_andon_listService.IsShowLoading = false;
    }
    );
    }
    }

