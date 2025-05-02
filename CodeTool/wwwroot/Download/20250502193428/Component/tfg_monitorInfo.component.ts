import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tfg_monitor } from 'src/app/shared/MES/tfg_monitor.model';
import { tfg_monitorService } from 'src/app/shared/MES/tfg_monitor.service';

@Component({
  selector: 'app-tfg_monitor-info',
  templateUrl: './tfg_monitor-info.component.html',
  styleUrls: ['./tfg_monitor-info.component.css']
})
export class tfg_monitorInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tfg_monitorService: tfg_monitorService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tfg_monitorService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tfg_monitorSearch();
  }
  tfg_monitorSearch() {
    this.tfg_monitorService.GetByIDAsync().subscribe(
      res => {
        this.tfg_monitorService.FormData = res as tfg_monitor;
        if (this.tfg_monitorService.FormData.TFG_MO_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tfg_monitorSave() {
    this.tfg_monitorService.IsShowLoading = true;
    this.tfg_monitorService.SaveAsync().subscribe(
      res => {
        this.tfg_monitorService.FormData = res as tfg_monitor;
        this.Router.navigateByUrl(environment.tfg_monitorInfo + this.tfg_monitorService.FormData.TFG_MO_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tfg_monitorService.IsShowLoading = false;
      }
    );
  }
  tfg_monitorAdd() {
    this.Router.navigateByUrl(environment.tfg_monitorInfo + environment.InitializationNumber);
    this.tfg_monitorService.BaseParameter.ID = environment.InitializationNumber;
    this.tfg_monitorSearch();
  }
}

