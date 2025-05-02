import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttc_rackmtin } from 'src/app/shared/MES/ttc_rackmtin.model';
import { ttc_rackmtinService } from 'src/app/shared/MES/ttc_rackmtin.service';

@Component({
  selector: 'app-ttc_rackmtin-info',
  templateUrl: './ttc_rackmtin-info.component.html',
  styleUrls: ['./ttc_rackmtin-info.component.css']
})
export class ttc_rackmtinInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttc_rackmtinService: ttc_rackmtinService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttc_rackmtinService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.ttc_rackmtinSearch();
  }
  ttc_rackmtinSearch() {
    this.ttc_rackmtinService.GetByIDAsync().subscribe(
      res => {
        this.ttc_rackmtinService.FormData = res as ttc_rackmtin;
        if (this.ttc_rackmtinService.FormData.TRACK_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  ttc_rackmtinSave() {
    this.ttc_rackmtinService.IsShowLoading = true;
    this.ttc_rackmtinService.SaveAsync().subscribe(
      res => {
        this.ttc_rackmtinService.FormData = res as ttc_rackmtin;
        this.Router.navigateByUrl(environment.ttc_rackmtinInfo + this.ttc_rackmtinService.FormData.TRACK_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.ttc_rackmtinService.IsShowLoading = false;
      }
    );
  }
  ttc_rackmtinAdd() {
    this.Router.navigateByUrl(environment.ttc_rackmtinInfo + environment.InitializationNumber);
    this.ttc_rackmtinService.BaseParameter.ID = environment.InitializationNumber;
    this.ttc_rackmtinSearch();
  }
}

