import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmmtin } from 'src/app/shared/MES/tmmtin.model';
import { tmmtinService } from 'src/app/shared/MES/tmmtin.service';

@Component({
  selector: 'app-tmmtin-info',
  templateUrl: './tmmtin-info.component.html',
  styleUrls: ['./tmmtin-info.component.css']
})
export class tmmtinInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmmtinService: tmmtinService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tmmtinService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tmmtinSearch();
  }
  tmmtinSearch() {
    this.tmmtinService.GetByIDAsync().subscribe(
      res => {
        this.tmmtinService.FormData = res as tmmtin;
        if (this.tmmtinService.FormData.MTIN_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tmmtinSave() {
    this.tmmtinService.IsShowLoading = true;
    this.tmmtinService.SaveAsync().subscribe(
      res => {
        this.tmmtinService.FormData = res as tmmtin;
        this.Router.navigateByUrl(environment.tmmtinInfo + this.tmmtinService.FormData.MTIN_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tmmtinService.IsShowLoading = false;
      }
    );
  }
  tmmtinAdd() {
    this.Router.navigateByUrl(environment.tmmtinInfo + environment.InitializationNumber);
    this.tmmtinService.BaseParameter.ID = environment.InitializationNumber;
    this.tmmtinSearch();
  }
}

