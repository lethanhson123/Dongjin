import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnon_oper } from 'src/app/shared/MES/tsnon_oper.model';
import { tsnon_operService } from 'src/app/shared/MES/tsnon_oper.service';

@Component({
  selector: 'app-tsnon_oper-info',
  templateUrl: './tsnon_oper-info.component.html',
  styleUrls: ['./tsnon_oper-info.component.css']
})
export class tsnon_operInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnon_operService: tsnon_operService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsnon_operService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.tsnon_operSearch();
  }
  tsnon_operSearch() {
    this.tsnon_operService.GetByIDAsync().subscribe(
      res => {
        this.tsnon_operService.FormData = res as tsnon_oper;
        if (this.tsnon_operService.FormData.TSNON_OPER_IDX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  tsnon_operSave() {
    this.tsnon_operService.IsShowLoading = true;
    this.tsnon_operService.SaveAsync().subscribe(
      res => {
        this.tsnon_operService.FormData = res as tsnon_oper;
        this.Router.navigateByUrl(environment.tsnon_operInfo + this.tsnon_operService.FormData.TSNON_OPER_IDX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.tsnon_operService.IsShowLoading = false;
      }
    );
  }
  tsnon_operAdd() {
    this.Router.navigateByUrl(environment.tsnon_operInfo + environment.InitializationNumber);
    this.tsnon_operService.BaseParameter.ID = environment.InitializationNumber;
    this.tsnon_operSearch();
  }
}

