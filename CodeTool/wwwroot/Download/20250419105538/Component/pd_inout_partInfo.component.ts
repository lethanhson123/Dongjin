import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_inout_part } from 'src/app/shared/MES/pd_inout_part.model';
import { pd_inout_partService } from 'src/app/shared/MES/pd_inout_part.service';

@Component({
  selector: 'app-pd_inout_part-info',
  templateUrl: './pd_inout_part-info.component.html',
  styleUrls: ['./pd_inout_part-info.component.css']
})
export class pd_inout_partInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_inout_partService: pd_inout_partService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pd_inout_partService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.pd_inout_partSearch();
  }
  pd_inout_partSearch() {
    this.pd_inout_partService.GetByIDAsync().subscribe(
      res => {
        this.pd_inout_partService.FormData = res as pd_inout_part;
        if (this.pd_inout_partService.FormData.PD_INPUT_PART_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  pd_inout_partSave() {
    this.pd_inout_partService.IsShowLoading = true;
    this.pd_inout_partService.SaveAsync().subscribe(
      res => {
        this.pd_inout_partService.FormData = res as pd_inout_part;
        this.Router.navigateByUrl(environment.pd_inout_partInfo + this.pd_inout_partService.FormData.PD_INPUT_PART_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.pd_inout_partService.IsShowLoading = false;
      }
    );
  }
  pd_inout_partAdd() {
    this.Router.navigateByUrl(environment.pd_inout_partInfo + environment.InitializationNumber);
    this.pd_inout_partService.BaseParameter.ID = environment.InitializationNumber;
    this.pd_inout_partSearch();
  }
}

