import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom } from 'src/app/shared/MES/tsbom.model';
import { tsbomService } from 'src/app/shared/MES/tsbom.service';

@Component({
  selector: 'app-tsbom-info',
  templateUrl: './tsbom-info.component.html',
  styleUrls: ['./tsbom-info.component.css']
})
export class tsbomInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbomService: tsbomService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsbomService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsbomSearch();
  }
  tsbomSearch() {
    this.tsbomService.GetByIDAsync().subscribe(
      res => {
        this.tsbomService.FormData = res as tsbom;
        if (this.tsbomService.FormData.BOM_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsbomSave() {
    this.tsbomService.IsShowLoading = true;
    this.tsbomService.SaveAsync().subscribe(
      res => {
        this.tsbomService.FormData = res as tsbom;
        this.Router.navigateByUrl(environment.tsbomInfo + this.tsbomService.FormData.BOM_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsbomService.IsShowLoading = false;
      }
    );
  }
  tsbomAdd() {
    this.Router.navigateByUrl(environment.tsbomInfo + environment.InitializationNumber);
    this.tsbomService.BaseParameter.ID = environment.InitializationNumber;
    this.tsbomSearch();
  }
}

