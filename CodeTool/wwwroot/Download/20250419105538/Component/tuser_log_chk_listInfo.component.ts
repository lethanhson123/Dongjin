import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tuser_log_chk_list } from 'src/app/shared/MES/tuser_log_chk_list.model';
import { tuser_log_chk_listService } from 'src/app/shared/MES/tuser_log_chk_list.service';

@Component({
  selector: 'app-tuser_log_chk_list-info',
  templateUrl: './tuser_log_chk_list-info.component.html',
  styleUrls: ['./tuser_log_chk_list-info.component.css']
})
export class tuser_log_chk_listInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tuser_log_chk_listService: tuser_log_chk_listService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tuser_log_chk_listService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tuser_log_chk_listSearch();
  }
  tuser_log_chk_listSearch() {
    this.tuser_log_chk_listService.GetByIDAsync().subscribe(
      res => {
        this.tuser_log_chk_listService.FormData = res as tuser_log_chk_list;
        if (this.tuser_log_chk_listService.FormData.TUSER_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tuser_log_chk_listSave() {
    this.tuser_log_chk_listService.IsShowLoading = true;
    this.tuser_log_chk_listService.SaveAsync().subscribe(
      res => {
        this.tuser_log_chk_listService.FormData = res as tuser_log_chk_list;
        this.Router.navigateByUrl(environment.tuser_log_chk_listInfo + this.tuser_log_chk_listService.FormData.TUSER_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tuser_log_chk_listService.IsShowLoading = false;
      }
    );
  }
  tuser_log_chk_listAdd() {
    this.Router.navigateByUrl(environment.tuser_log_chk_listInfo + environment.InitializationNumber);
    this.tuser_log_chk_listService.BaseParameter.ID = environment.InitializationNumber;
    this.tuser_log_chk_listSearch();
  }
}

