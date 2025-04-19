import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim_loc } from 'src/app/shared/MES/tdpdmtim_loc.model';
import { tdpdmtim_locService } from 'src/app/shared/MES/tdpdmtim_loc.service';

@Component({
  selector: 'app-tdpdmtim_loc-info',
  templateUrl: './tdpdmtim_loc-info.component.html',
  styleUrls: ['./tdpdmtim_loc-info.component.css']
})
export class tdpdmtim_locInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtim_locService: tdpdmtim_locService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdmtim_locService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tdpdmtim_locSearch();
  }
  tdpdmtim_locSearch() {
    this.tdpdmtim_locService.GetByIDAsync().subscribe(
      res => {
        this.tdpdmtim_locService.FormData = res as tdpdmtim_loc;
        if (this.tdpdmtim_locService.FormData.TDLOC_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tdpdmtim_locSave() {
    this.tdpdmtim_locService.IsShowLoading = true;
    this.tdpdmtim_locService.SaveAsync().subscribe(
      res => {
        this.tdpdmtim_locService.FormData = res as tdpdmtim_loc;
        this.Router.navigateByUrl(environment.tdpdmtim_locInfo + this.tdpdmtim_locService.FormData.TDLOC_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tdpdmtim_locService.IsShowLoading = false;
      }
    );
  }
  tdpdmtim_locAdd() {
    this.Router.navigateByUrl(environment.tdpdmtim_locInfo + environment.InitializationNumber);
    this.tdpdmtim_locService.BaseParameter.ID = environment.InitializationNumber;
    this.tdpdmtim_locSearch();
  }
}

