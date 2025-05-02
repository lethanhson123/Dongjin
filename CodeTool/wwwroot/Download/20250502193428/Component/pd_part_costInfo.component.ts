import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_part_cost } from 'src/app/shared/MES/pd_part_cost.model';
import { pd_part_costService } from 'src/app/shared/MES/pd_part_cost.service';

@Component({
  selector: 'app-pd_part_cost-info',
  templateUrl: './pd_part_cost-info.component.html',
  styleUrls: ['./pd_part_cost-info.component.css']
})
export class pd_part_costInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_part_costService: pd_part_costService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pd_part_costService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.pd_part_costSearch();
  }
  pd_part_costSearch() {
    this.pd_part_costService.GetByIDAsync().subscribe(
      res => {
        this.pd_part_costService.FormData = res as pd_part_cost;
        if (this.pd_part_costService.FormData.PDCOST_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  pd_part_costSave() {
    this.pd_part_costService.IsShowLoading = true;
    this.pd_part_costService.SaveAsync().subscribe(
      res => {
        this.pd_part_costService.FormData = res as pd_part_cost;
        this.Router.navigateByUrl(environment.pd_part_costInfo + this.pd_part_costService.FormData.PDCOST_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.pd_part_costService.IsShowLoading = false;
      }
    );
  }
  pd_part_costAdd() {
    this.Router.navigateByUrl(environment.pd_part_costInfo + environment.InitializationNumber);
    this.pd_part_costService.BaseParameter.ID = environment.InitializationNumber;
    this.pd_part_costSearch();
  }
}

