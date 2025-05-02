import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim_tmp } from 'src/app/shared/MES/tdpdmtim_tmp.model';
import { tdpdmtim_tmpService } from 'src/app/shared/MES/tdpdmtim_tmp.service';

@Component({
  selector: 'app-tdpdmtim_tmp-info',
  templateUrl: './tdpdmtim_tmp-info.component.html',
  styleUrls: ['./tdpdmtim_tmp-info.component.css']
})
export class tdpdmtim_tmpInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtim_tmpService: tdpdmtim_tmpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdmtim_tmpService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tdpdmtim_tmpSearch();
  }
  tdpdmtim_tmpSearch() {
    this.tdpdmtim_tmpService.GetByIDAsync().subscribe(
      res => {
        this.tdpdmtim_tmpService.FormData = res as tdpdmtim_tmp;
        if (this.tdpdmtim_tmpService.FormData.PDTMP_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tdpdmtim_tmpSave() {
    this.tdpdmtim_tmpService.IsShowLoading = true;
    this.tdpdmtim_tmpService.SaveAsync().subscribe(
      res => {
        this.tdpdmtim_tmpService.FormData = res as tdpdmtim_tmp;
        this.Router.navigateByUrl(environment.tdpdmtim_tmpInfo + this.tdpdmtim_tmpService.FormData.PDTMP_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tdpdmtim_tmpService.IsShowLoading = false;
      }
    );
  }
  tdpdmtim_tmpAdd() {
    this.Router.navigateByUrl(environment.tdpdmtim_tmpInfo + environment.InitializationNumber);
    this.tdpdmtim_tmpService.BaseParameter.ID = environment.InitializationNumber;
    this.tdpdmtim_tmpSearch();
  }
}

