import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnon_oper_worker } from 'src/app/shared/MES/tsnon_oper_worker.model';
import { tsnon_oper_workerService } from 'src/app/shared/MES/tsnon_oper_worker.service';

@Component({
  selector: 'app-tsnon_oper_worker-info',
  templateUrl: './tsnon_oper_worker-info.component.html',
  styleUrls: ['./tsnon_oper_worker-info.component.css']
})
export class tsnon_oper_workerInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnon_oper_workerService: tsnon_oper_workerService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsnon_oper_workerService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsnon_oper_workerSearch();
  }
  tsnon_oper_workerSearch() {
    this.tsnon_oper_workerService.GetByIDAsync().subscribe(
      res => {
        this.tsnon_oper_workerService.FormData = res as tsnon_oper_worker;
        if (this.tsnon_oper_workerService.FormData.TSNON_OPER_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsnon_oper_workerSave() {
    this.tsnon_oper_workerService.IsShowLoading = true;
    this.tsnon_oper_workerService.SaveAsync().subscribe(
      res => {
        this.tsnon_oper_workerService.FormData = res as tsnon_oper_worker;
        this.Router.navigateByUrl(environment.tsnon_oper_workerInfo + this.tsnon_oper_workerService.FormData.TSNON_OPER_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsnon_oper_workerService.IsShowLoading = false;
      }
    );
  }
  tsnon_oper_workerAdd() {
    this.Router.navigateByUrl(environment.tsnon_oper_workerInfo + environment.InitializationNumber);
    this.tsnon_oper_workerService.BaseParameter.ID = environment.InitializationNumber;
    this.tsnon_oper_workerSearch();
  }
}

