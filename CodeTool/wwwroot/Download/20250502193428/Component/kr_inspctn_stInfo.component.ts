import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_inspctn_st } from 'src/app/shared/MES/kr_inspctn_st.model';
import { kr_inspctn_stService } from 'src/app/shared/MES/kr_inspctn_st.service';

@Component({
  selector: 'app-kr_inspctn_st-info',
  templateUrl: './kr_inspctn_st-info.component.html',
  styleUrls: ['./kr_inspctn_st-info.component.css']
})
export class kr_inspctn_stInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_inspctn_stService: kr_inspctn_stService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.kr_inspctn_stService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.kr_inspctn_stSearch();
  }
  kr_inspctn_stSearch() {
    this.kr_inspctn_stService.GetByIDAsync().subscribe(
      res => {
        this.kr_inspctn_stService.FormData = res as kr_inspctn_st;
        if (this.kr_inspctn_stService.FormData.KR_INSPCTN_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  kr_inspctn_stSave() {
    this.kr_inspctn_stService.IsShowLoading = true;
    this.kr_inspctn_stService.SaveAsync().subscribe(
      res => {
        this.kr_inspctn_stService.FormData = res as kr_inspctn_st;
        this.Router.navigateByUrl(environment.kr_inspctn_stInfo + this.kr_inspctn_stService.FormData.KR_INSPCTN_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.kr_inspctn_stService.IsShowLoading = false;
      }
    );
  }
  kr_inspctn_stAdd() {
    this.Router.navigateByUrl(environment.kr_inspctn_stInfo + environment.InitializationNumber);
    this.kr_inspctn_stService.BaseParameter.ID = environment.InitializationNumber;
    this.kr_inspctn_stSearch();
  }
}

