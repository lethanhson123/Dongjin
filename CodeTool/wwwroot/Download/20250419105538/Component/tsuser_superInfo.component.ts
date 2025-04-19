import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsuser_super } from 'src/app/shared/MES/tsuser_super.model';
import { tsuser_superService } from 'src/app/shared/MES/tsuser_super.service';

@Component({
  selector: 'app-tsuser_super-info',
  templateUrl: './tsuser_super-info.component.html',
  styleUrls: ['./tsuser_super-info.component.css']
})
export class tsuser_superInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsuser_superService: tsuser_superService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsuser_superService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsuser_superSearch();
  }
  tsuser_superSearch() {
    this.tsuser_superService.GetByIDAsync().subscribe(
      res => {
        this.tsuser_superService.FormData = res as tsuser_super;
        if (this.tsuser_superService.FormData.USER_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsuser_superSave() {
    this.tsuser_superService.IsShowLoading = true;
    this.tsuser_superService.SaveAsync().subscribe(
      res => {
        this.tsuser_superService.FormData = res as tsuser_super;
        this.Router.navigateByUrl(environment.tsuser_superInfo + this.tsuser_superService.FormData.USER_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsuser_superService.IsShowLoading = false;
      }
    );
  }
  tsuser_superAdd() {
    this.Router.navigateByUrl(environment.tsuser_superInfo + environment.InitializationNumber);
    this.tsuser_superService.BaseParameter.ID = environment.InitializationNumber;
    this.tsuser_superSearch();
  }
}

