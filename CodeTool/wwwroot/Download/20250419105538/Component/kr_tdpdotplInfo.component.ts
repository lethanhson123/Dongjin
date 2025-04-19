import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_tdpdotpl } from 'src/app/shared/MES/kr_tdpdotpl.model';
import { kr_tdpdotplService } from 'src/app/shared/MES/kr_tdpdotpl.service';

@Component({
  selector: 'app-kr_tdpdotpl-info',
  templateUrl: './kr_tdpdotpl-info.component.html',
  styleUrls: ['./kr_tdpdotpl-info.component.css']
})
export class kr_tdpdotplInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_tdpdotplService: kr_tdpdotplService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.kr_tdpdotplService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.kr_tdpdotplSearch();
  }
  kr_tdpdotplSearch() {
    this.kr_tdpdotplService.GetByIDAsync().subscribe(
      res => {
        this.kr_tdpdotplService.FormData = res as kr_tdpdotpl;
        if (this.kr_tdpdotplService.FormData.PDOTPL_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  kr_tdpdotplSave() {
    this.kr_tdpdotplService.IsShowLoading = true;
    this.kr_tdpdotplService.SaveAsync().subscribe(
      res => {
        this.kr_tdpdotplService.FormData = res as kr_tdpdotpl;
        this.Router.navigateByUrl(environment.kr_tdpdotplInfo + this.kr_tdpdotplService.FormData.PDOTPL_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.kr_tdpdotplService.IsShowLoading = false;
      }
    );
  }
  kr_tdpdotplAdd() {
    this.Router.navigateByUrl(environment.kr_tdpdotplInfo + environment.InitializationNumber);
    this.kr_tdpdotplService.BaseParameter.ID = environment.InitializationNumber;
    this.kr_tdpdotplSearch();
  }
}

