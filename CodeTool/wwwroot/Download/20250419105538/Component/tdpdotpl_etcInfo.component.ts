import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdotpl_etc } from 'src/app/shared/MES/tdpdotpl_etc.model';
import { tdpdotpl_etcService } from 'src/app/shared/MES/tdpdotpl_etc.service';

@Component({
  selector: 'app-tdpdotpl_etc-info',
  templateUrl: './tdpdotpl_etc-info.component.html',
  styleUrls: ['./tdpdotpl_etc-info.component.css']
})
export class tdpdotpl_etcInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdotpl_etcService: tdpdotpl_etcService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdotpl_etcService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tdpdotpl_etcSearch();
  }
  tdpdotpl_etcSearch() {
    this.tdpdotpl_etcService.GetByIDAsync().subscribe(
      res => {
        this.tdpdotpl_etcService.FormData = res as tdpdotpl_etc;
        if (this.tdpdotpl_etcService.FormData.TDPDOTPL_ETC_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tdpdotpl_etcSave() {
    this.tdpdotpl_etcService.IsShowLoading = true;
    this.tdpdotpl_etcService.SaveAsync().subscribe(
      res => {
        this.tdpdotpl_etcService.FormData = res as tdpdotpl_etc;
        this.Router.navigateByUrl(environment.tdpdotpl_etcInfo + this.tdpdotpl_etcService.FormData.TDPDOTPL_ETC_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tdpdotpl_etcService.IsShowLoading = false;
      }
    );
  }
  tdpdotpl_etcAdd() {
    this.Router.navigateByUrl(environment.tdpdotpl_etcInfo + environment.InitializationNumber);
    this.tdpdotpl_etcService.BaseParameter.ID = environment.InitializationNumber;
    this.tdpdotpl_etcSearch();
  }
}

