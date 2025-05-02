import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmbrcd } from 'src/app/shared/MES/tmbrcd.model';
import { tmbrcdService } from 'src/app/shared/MES/tmbrcd.service';

@Component({
  selector: 'app-tmbrcd-info',
  templateUrl: './tmbrcd-info.component.html',
  styleUrls: ['./tmbrcd-info.component.css']
})
export class tmbrcdInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmbrcdService: tmbrcdService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tmbrcdService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tmbrcdSearch();
  }
  tmbrcdSearch() {
    this.tmbrcdService.GetByIDAsync().subscribe(
      res => {
        this.tmbrcdService.FormData = res as tmbrcd;
        if (this.tmbrcdService.FormData.BARCD_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tmbrcdSave() {
    this.tmbrcdService.IsShowLoading = true;
    this.tmbrcdService.SaveAsync().subscribe(
      res => {
        this.tmbrcdService.FormData = res as tmbrcd;
        this.Router.navigateByUrl(environment.tmbrcdInfo + this.tmbrcdService.FormData.BARCD_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tmbrcdService.IsShowLoading = false;
      }
    );
  }
  tmbrcdAdd() {
    this.Router.navigateByUrl(environment.tmbrcdInfo + environment.InitializationNumber);
    this.tmbrcdService.BaseParameter.ID = environment.InitializationNumber;
    this.tmbrcdSearch();
  }
}

