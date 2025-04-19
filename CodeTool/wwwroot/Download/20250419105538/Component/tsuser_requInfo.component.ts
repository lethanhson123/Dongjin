import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsuser_requ } from 'src/app/shared/MES/tsuser_requ.model';
import { tsuser_requService } from 'src/app/shared/MES/tsuser_requ.service';

@Component({
  selector: 'app-tsuser_requ-info',
  templateUrl: './tsuser_requ-info.component.html',
  styleUrls: ['./tsuser_requ-info.component.css']
})
export class tsuser_requInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsuser_requService: tsuser_requService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsuser_requService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsuser_requSearch();
  }
  tsuser_requSearch() {
    this.tsuser_requService.GetByIDAsync().subscribe(
      res => {
        this.tsuser_requService.FormData = res as tsuser_requ;
        if (this.tsuser_requService.FormData.REQU_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsuser_requSave() {
    this.tsuser_requService.IsShowLoading = true;
    this.tsuser_requService.SaveAsync().subscribe(
      res => {
        this.tsuser_requService.FormData = res as tsuser_requ;
        this.Router.navigateByUrl(environment.tsuser_requInfo + this.tsuser_requService.FormData.REQU_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsuser_requService.IsShowLoading = false;
      }
    );
  }
  tsuser_requAdd() {
    this.Router.navigateByUrl(environment.tsuser_requInfo + environment.InitializationNumber);
    this.tsuser_requService.BaseParameter.ID = environment.InitializationNumber;
    this.tsuser_requSearch();
  }
}

