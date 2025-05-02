import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { twwkar_spst } from 'src/app/shared/MES/twwkar_spst.model';
import { twwkar_spstService } from 'src/app/shared/MES/twwkar_spst.service';

@Component({
  selector: 'app-twwkar_spst-info',
  templateUrl: './twwkar_spst-info.component.html',
  styleUrls: ['./twwkar_spst-info.component.css']
})
export class twwkar_spstInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public twwkar_spstService: twwkar_spstService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.twwkar_spstService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.twwkar_spstSearch();
  }
  twwkar_spstSearch() {
    this.twwkar_spstService.GetByIDAsync().subscribe(
      res => {
        this.twwkar_spstService.FormData = res as twwkar_spst;
        if (this.twwkar_spstService.FormData.WK_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  twwkar_spstSave() {
    this.twwkar_spstService.IsShowLoading = true;
    this.twwkar_spstService.SaveAsync().subscribe(
      res => {
        this.twwkar_spstService.FormData = res as twwkar_spst;
        this.Router.navigateByUrl(environment.twwkar_spstInfo + this.twwkar_spstService.FormData.WK_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.twwkar_spstService.IsShowLoading = false;
      }
    );
  }
  twwkar_spstAdd() {
    this.Router.navigateByUrl(environment.twwkar_spstInfo + environment.InitializationNumber);
    this.twwkar_spstService.BaseParameter.ID = environment.InitializationNumber;
    this.twwkar_spstSearch();
  }
}

