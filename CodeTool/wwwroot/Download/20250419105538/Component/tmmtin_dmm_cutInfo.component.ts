import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmmtin_dmm_cut } from 'src/app/shared/MES/tmmtin_dmm_cut.model';
import { tmmtin_dmm_cutService } from 'src/app/shared/MES/tmmtin_dmm_cut.service';

@Component({
  selector: 'app-tmmtin_dmm_cut-info',
  templateUrl: './tmmtin_dmm_cut-info.component.html',
  styleUrls: ['./tmmtin_dmm_cut-info.component.css']
})
export class tmmtin_dmm_cutInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmmtin_dmm_cutService: tmmtin_dmm_cutService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tmmtin_dmm_cutService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tmmtin_dmm_cutSearch();
  }
  tmmtin_dmm_cutSearch() {
    this.tmmtin_dmm_cutService.GetByIDAsync().subscribe(
      res => {
        this.tmmtin_dmm_cutService.FormData = res as tmmtin_dmm_cut;
        if (this.tmmtin_dmm_cutService.FormData.TMMTIN_DMM_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tmmtin_dmm_cutSave() {
    this.tmmtin_dmm_cutService.IsShowLoading = true;
    this.tmmtin_dmm_cutService.SaveAsync().subscribe(
      res => {
        this.tmmtin_dmm_cutService.FormData = res as tmmtin_dmm_cut;
        this.Router.navigateByUrl(environment.tmmtin_dmm_cutInfo + this.tmmtin_dmm_cutService.FormData.TMMTIN_DMM_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tmmtin_dmm_cutService.IsShowLoading = false;
      }
    );
  }
  tmmtin_dmm_cutAdd() {
    this.Router.navigateByUrl(environment.tmmtin_dmm_cutInfo + environment.InitializationNumber);
    this.tmmtin_dmm_cutService.BaseParameter.ID = environment.InitializationNumber;
    this.tmmtin_dmm_cutSearch();
  }
}

