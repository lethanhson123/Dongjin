import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_inspctn_test } from 'src/app/shared/MES/kr_inspctn_test.model';
import { kr_inspctn_testService } from 'src/app/shared/MES/kr_inspctn_test.service';

@Component({
  selector: 'app-kr_inspctn_test-info',
  templateUrl: './kr_inspctn_test-info.component.html',
  styleUrls: ['./kr_inspctn_test-info.component.css']
})
export class kr_inspctn_testInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_inspctn_testService: kr_inspctn_testService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.kr_inspctn_testService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.kr_inspctn_testSearch();
  }
  kr_inspctn_testSearch() {
    this.kr_inspctn_testService.GetByIDAsync().subscribe(
      res => {
        this.kr_inspctn_testService.FormData = res as kr_inspctn_test;
        if (this.kr_inspctn_testService.FormData.KR_INSPCTN_TEST_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  kr_inspctn_testSave() {
    this.kr_inspctn_testService.IsShowLoading = true;
    this.kr_inspctn_testService.SaveAsync().subscribe(
      res => {
        this.kr_inspctn_testService.FormData = res as kr_inspctn_test;
        this.Router.navigateByUrl(environment.kr_inspctn_testInfo + this.kr_inspctn_testService.FormData.KR_INSPCTN_TEST_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.kr_inspctn_testService.IsShowLoading = false;
      }
    );
  }
  kr_inspctn_testAdd() {
    this.Router.navigateByUrl(environment.kr_inspctn_testInfo + environment.InitializationNumber);
    this.kr_inspctn_testService.BaseParameter.ID = environment.InitializationNumber;
    this.kr_inspctn_testSearch();
  }
}

