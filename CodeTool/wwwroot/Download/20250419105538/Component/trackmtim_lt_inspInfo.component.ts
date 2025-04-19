import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { trackmtim_lt_insp } from 'src/app/shared/MES/trackmtim_lt_insp.model';
import { trackmtim_lt_inspService } from 'src/app/shared/MES/trackmtim_lt_insp.service';

@Component({
  selector: 'app-trackmtim_lt_insp-info',
  templateUrl: './trackmtim_lt_insp-info.component.html',
  styleUrls: ['./trackmtim_lt_insp-info.component.css']
})
export class trackmtim_lt_inspInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public trackmtim_lt_inspService: trackmtim_lt_inspService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.trackmtim_lt_inspService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.trackmtim_lt_inspSearch();
  }
  trackmtim_lt_inspSearch() {
    this.trackmtim_lt_inspService.GetByIDAsync().subscribe(
      res => {
        this.trackmtim_lt_inspService.FormData = res as trackmtim_lt_insp;
        if (this.trackmtim_lt_inspService.FormData.LT_INSP_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  trackmtim_lt_inspSave() {
    this.trackmtim_lt_inspService.IsShowLoading = true;
    this.trackmtim_lt_inspService.SaveAsync().subscribe(
      res => {
        this.trackmtim_lt_inspService.FormData = res as trackmtim_lt_insp;
        this.Router.navigateByUrl(environment.trackmtim_lt_inspInfo + this.trackmtim_lt_inspService.FormData.LT_INSP_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.trackmtim_lt_inspService.IsShowLoading = false;
      }
    );
  }
  trackmtim_lt_inspAdd() {
    this.Router.navigateByUrl(environment.trackmtim_lt_inspInfo + environment.InitializationNumber);
    this.trackmtim_lt_inspService.BaseParameter.ID = environment.InitializationNumber;
    this.trackmtim_lt_inspSearch();
  }
}

