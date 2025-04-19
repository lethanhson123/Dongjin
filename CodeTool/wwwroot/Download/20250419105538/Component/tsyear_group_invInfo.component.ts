import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsyear_group_inv } from 'src/app/shared/MES/tsyear_group_inv.model';
import { tsyear_group_invService } from 'src/app/shared/MES/tsyear_group_inv.service';

@Component({
  selector: 'app-tsyear_group_inv-info',
  templateUrl: './tsyear_group_inv-info.component.html',
  styleUrls: ['./tsyear_group_inv-info.component.css']
})
export class tsyear_group_invInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsyear_group_invService: tsyear_group_invService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsyear_group_invService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsyear_group_invSearch();
  }
  tsyear_group_invSearch() {
    this.tsyear_group_invService.GetByIDAsync().subscribe(
      res => {
        this.tsyear_group_invService.FormData = res as tsyear_group_inv;
        if (this.tsyear_group_invService.FormData.TSYEAR_GROUP_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsyear_group_invSave() {
    this.tsyear_group_invService.IsShowLoading = true;
    this.tsyear_group_invService.SaveAsync().subscribe(
      res => {
        this.tsyear_group_invService.FormData = res as tsyear_group_inv;
        this.Router.navigateByUrl(environment.tsyear_group_invInfo + this.tsyear_group_invService.FormData.TSYEAR_GROUP_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsyear_group_invService.IsShowLoading = false;
      }
    );
  }
  tsyear_group_invAdd() {
    this.Router.navigateByUrl(environment.tsyear_group_invInfo + environment.InitializationNumber);
    this.tsyear_group_invService.BaseParameter.ID = environment.InitializationNumber;
    this.tsyear_group_invSearch();
  }
}

