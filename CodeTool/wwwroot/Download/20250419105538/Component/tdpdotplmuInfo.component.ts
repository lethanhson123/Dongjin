import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdotplmu } from 'src/app/shared/MES/tdpdotplmu.model';
import { tdpdotplmuService } from 'src/app/shared/MES/tdpdotplmu.service';

@Component({
  selector: 'app-tdpdotplmu-info',
  templateUrl: './tdpdotplmu-info.component.html',
  styleUrls: ['./tdpdotplmu-info.component.css']
})
export class tdpdotplmuInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdotplmuService: tdpdotplmuService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdotplmuService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tdpdotplmuSearch();
  }
  tdpdotplmuSearch() {
    this.tdpdotplmuService.GetByIDAsync().subscribe(
      res => {
        this.tdpdotplmuService.FormData = res as tdpdotplmu;
        if (this.tdpdotplmuService.FormData.TDPDOTPLMU_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tdpdotplmuSave() {
    this.tdpdotplmuService.IsShowLoading = true;
    this.tdpdotplmuService.SaveAsync().subscribe(
      res => {
        this.tdpdotplmuService.FormData = res as tdpdotplmu;
        this.Router.navigateByUrl(environment.tdpdotplmuInfo + this.tdpdotplmuService.FormData.TDPDOTPLMU_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tdpdotplmuService.IsShowLoading = false;
      }
    );
  }
  tdpdotplmuAdd() {
    this.Router.navigateByUrl(environment.tdpdotplmuInfo + environment.InitializationNumber);
    this.tdpdotplmuService.BaseParameter.ID = environment.InitializationNumber;
    this.tdpdotplmuSearch();
  }
}

