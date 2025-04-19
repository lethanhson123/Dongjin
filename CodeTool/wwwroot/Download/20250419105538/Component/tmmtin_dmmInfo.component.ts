import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmmtin_dmm } from 'src/app/shared/MES/tmmtin_dmm.model';
import { tmmtin_dmmService } from 'src/app/shared/MES/tmmtin_dmm.service';

@Component({
  selector: 'app-tmmtin_dmm-info',
  templateUrl: './tmmtin_dmm-info.component.html',
  styleUrls: ['./tmmtin_dmm-info.component.css']
})
export class tmmtin_dmmInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmmtin_dmmService: tmmtin_dmmService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tmmtin_dmmService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tmmtin_dmmSearch();
  }
  tmmtin_dmmSearch() {
    this.tmmtin_dmmService.GetByIDAsync().subscribe(
      res => {
        this.tmmtin_dmmService.FormData = res as tmmtin_dmm;
        if (this.tmmtin_dmmService.FormData.TMMTIN_DMM_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tmmtin_dmmSave() {
    this.tmmtin_dmmService.IsShowLoading = true;
    this.tmmtin_dmmService.SaveAsync().subscribe(
      res => {
        this.tmmtin_dmmService.FormData = res as tmmtin_dmm;
        this.Router.navigateByUrl(environment.tmmtin_dmmInfo + this.tmmtin_dmmService.FormData.TMMTIN_DMM_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tmmtin_dmmService.IsShowLoading = false;
      }
    );
  }
  tmmtin_dmmAdd() {
    this.Router.navigateByUrl(environment.tmmtin_dmmInfo + environment.InitializationNumber);
    this.tmmtin_dmmService.BaseParameter.ID = environment.InitializationNumber;
    this.tmmtin_dmmSearch();
  }
}

