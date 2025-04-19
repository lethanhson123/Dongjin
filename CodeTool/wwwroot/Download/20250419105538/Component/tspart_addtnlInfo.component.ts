import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tspart_addtnl } from 'src/app/shared/MES/tspart_addtnl.model';
import { tspart_addtnlService } from 'src/app/shared/MES/tspart_addtnl.service';

@Component({
  selector: 'app-tspart_addtnl-info',
  templateUrl: './tspart_addtnl-info.component.html',
  styleUrls: ['./tspart_addtnl-info.component.css']
})
export class tspart_addtnlInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tspart_addtnlService: tspart_addtnlService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tspart_addtnlService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tspart_addtnlSearch();
  }
  tspart_addtnlSearch() {
    this.tspart_addtnlService.GetByIDAsync().subscribe(
      res => {
        this.tspart_addtnlService.FormData = res as tspart_addtnl;
        if (this.tspart_addtnlService.FormData.PART_ADDTNL_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tspart_addtnlSave() {
    this.tspart_addtnlService.IsShowLoading = true;
    this.tspart_addtnlService.SaveAsync().subscribe(
      res => {
        this.tspart_addtnlService.FormData = res as tspart_addtnl;
        this.Router.navigateByUrl(environment.tspart_addtnlInfo + this.tspart_addtnlService.FormData.PART_ADDTNL_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tspart_addtnlService.IsShowLoading = false;
      }
    );
  }
  tspart_addtnlAdd() {
    this.Router.navigateByUrl(environment.tspart_addtnlInfo + environment.InitializationNumber);
    this.tspart_addtnlService.BaseParameter.ID = environment.InitializationNumber;
    this.tspart_addtnlSearch();
  }
}

