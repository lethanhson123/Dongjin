import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmmtin_dmm_lead } from 'src/app/shared/MES/tmmtin_dmm_lead.model';
import { tmmtin_dmm_leadService } from 'src/app/shared/MES/tmmtin_dmm_lead.service';

@Component({
  selector: 'app-tmmtin_dmm_lead-info',
  templateUrl: './tmmtin_dmm_lead-info.component.html',
  styleUrls: ['./tmmtin_dmm_lead-info.component.css']
})
export class tmmtin_dmm_leadInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmmtin_dmm_leadService: tmmtin_dmm_leadService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tmmtin_dmm_leadService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tmmtin_dmm_leadSearch();
  }
  tmmtin_dmm_leadSearch() {
    this.tmmtin_dmm_leadService.GetByIDAsync().subscribe(
      res => {
        this.tmmtin_dmm_leadService.FormData = res as tmmtin_dmm_lead;
        if (this.tmmtin_dmm_leadService.FormData.TMMTIN_DMM_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tmmtin_dmm_leadSave() {
    this.tmmtin_dmm_leadService.IsShowLoading = true;
    this.tmmtin_dmm_leadService.SaveAsync().subscribe(
      res => {
        this.tmmtin_dmm_leadService.FormData = res as tmmtin_dmm_lead;
        this.Router.navigateByUrl(environment.tmmtin_dmm_leadInfo + this.tmmtin_dmm_leadService.FormData.TMMTIN_DMM_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tmmtin_dmm_leadService.IsShowLoading = false;
      }
    );
  }
  tmmtin_dmm_leadAdd() {
    this.Router.navigateByUrl(environment.tmmtin_dmm_leadInfo + environment.InitializationNumber);
    this.tmmtin_dmm_leadService.BaseParameter.ID = environment.InitializationNumber;
    this.tmmtin_dmm_leadSearch();
  }
}

