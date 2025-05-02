import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_tdpdmtim_tmp } from 'src/app/shared/MES/kr_tdpdmtim_tmp.model';
import { kr_tdpdmtim_tmpService } from 'src/app/shared/MES/kr_tdpdmtim_tmp.service';

@Component({
  selector: 'app-kr_tdpdmtim_tmp-info',
  templateUrl: './kr_tdpdmtim_tmp-info.component.html',
  styleUrls: ['./kr_tdpdmtim_tmp-info.component.css']
})
export class kr_tdpdmtim_tmpInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_tdpdmtim_tmpService: kr_tdpdmtim_tmpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.kr_tdpdmtim_tmpService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.kr_tdpdmtim_tmpSearch();
  }
  kr_tdpdmtim_tmpSearch() {
    this.kr_tdpdmtim_tmpService.GetByIDAsync().subscribe(
      res => {
        this.kr_tdpdmtim_tmpService.FormData = res as kr_tdpdmtim_tmp;
        if (this.kr_tdpdmtim_tmpService.FormData.KR_TDPDMTIN_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  kr_tdpdmtim_tmpSave() {
    this.kr_tdpdmtim_tmpService.IsShowLoading = true;
    this.kr_tdpdmtim_tmpService.SaveAsync().subscribe(
      res => {
        this.kr_tdpdmtim_tmpService.FormData = res as kr_tdpdmtim_tmp;
        this.Router.navigateByUrl(environment.kr_tdpdmtim_tmpInfo + this.kr_tdpdmtim_tmpService.FormData.KR_TDPDMTIN_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.kr_tdpdmtim_tmpService.IsShowLoading = false;
      }
    );
  }
  kr_tdpdmtim_tmpAdd() {
    this.Router.navigateByUrl(environment.kr_tdpdmtim_tmpInfo + environment.InitializationNumber);
    this.kr_tdpdmtim_tmpService.BaseParameter.ID = environment.InitializationNumber;
    this.kr_tdpdmtim_tmpSearch();
  }
}

