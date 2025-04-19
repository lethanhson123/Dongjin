import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pdpusch } from 'src/app/shared/MES/pdpusch.model';
import { pdpuschService } from 'src/app/shared/MES/pdpusch.service';

@Component({
  selector: 'app-pdpusch-info',
  templateUrl: './pdpusch-info.component.html',
  styleUrls: ['./pdpusch-info.component.css']
})
export class pdpuschInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pdpuschService: pdpuschService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pdpuschService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.pdpuschSearch();
  }
  pdpuschSearch() {
    this.pdpuschService.GetByIDAsync().subscribe(
      res => {
        this.pdpuschService.FormData = res as pdpusch;
        if (this.pdpuschService.FormData.PDPUSCH_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  pdpuschSave() {
    this.pdpuschService.IsShowLoading = true;
    this.pdpuschService.SaveAsync().subscribe(
      res => {
        this.pdpuschService.FormData = res as pdpusch;
        this.Router.navigateByUrl(environment.pdpuschInfo + this.pdpuschService.FormData.PDPUSCH_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.pdpuschService.IsShowLoading = false;
      }
    );
  }
  pdpuschAdd() {
    this.Router.navigateByUrl(environment.pdpuschInfo + environment.InitializationNumber);
    this.pdpuschService.BaseParameter.ID = environment.InitializationNumber;
    this.pdpuschSearch();
  }
}

