import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttoolmaster } from 'src/app/shared/MES/ttoolmaster.model';
import { ttoolmasterService } from 'src/app/shared/MES/ttoolmaster.service';

@Component({
  selector: 'app-ttoolmaster-info',
  templateUrl: './ttoolmaster-info.component.html',
  styleUrls: ['./ttoolmaster-info.component.css']
})
export class ttoolmasterInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttoolmasterService: ttoolmasterService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttoolmasterService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.ttoolmasterSearch();
  }
  ttoolmasterSearch() {
    this.ttoolmasterService.GetByIDAsync().subscribe(
      res => {
        this.ttoolmasterService.FormData = res as ttoolmaster;
        if (this.ttoolmasterService.FormData.TOOL_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  ttoolmasterSave() {
    this.ttoolmasterService.IsShowLoading = true;
    this.ttoolmasterService.SaveAsync().subscribe(
      res => {
        this.ttoolmasterService.FormData = res as ttoolmaster;
        this.Router.navigateByUrl(environment.ttoolmasterInfo + this.ttoolmasterService.FormData.TOOL_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.ttoolmasterService.IsShowLoading = false;
      }
    );
  }
  ttoolmasterAdd() {
    this.Router.navigateByUrl(environment.ttoolmasterInfo + environment.InitializationNumber);
    this.ttoolmasterService.BaseParameter.ID = environment.InitializationNumber;
    this.ttoolmasterSearch();
  }
}

