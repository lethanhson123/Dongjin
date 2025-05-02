import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttc_order } from 'src/app/shared/MES/ttc_order.model';
import { ttc_orderService } from 'src/app/shared/MES/ttc_order.service';

@Component({
  selector: 'app-ttc_order-info',
  templateUrl: './ttc_order-info.component.html',
  styleUrls: ['./ttc_order-info.component.css']
})
export class ttc_orderInfoComponent implements OnInit {

  constructor(
    public ActiveRouter: ActivatedRoute,
    public Router: Router,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttc_orderService: ttc_orderService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttc_orderService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
    this.ttc_orderSearch();
  }
  ttc_orderSearch() {
    this.ttc_orderService.GetByIDAsync().subscribe(
      res => {
        this.ttc_orderService.FormData = res as ttc_order;
        if (this.ttc_orderService.FormData.TTC_PO_INX == environment.InitializationNumber) {
        }
      },
      err => {
      }
    );
  }
  ttc_orderSave() {
    this.ttc_orderService.IsShowLoading = true;
    this.ttc_orderService.SaveAsync().subscribe(
      res => {
        this.ttc_orderService.FormData = res as ttc_order;
        this.Router.navigateByUrl(environment.ttc_orderInfo + this.ttc_orderService.FormData.TTC_PO_INX);
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
      },
      () => {
        this.ttc_orderService.IsShowLoading = false;
      }
    );
  }
  ttc_orderAdd() {
    this.Router.navigateByUrl(environment.ttc_orderInfo + environment.InitializationNumber);
    this.ttc_orderService.BaseParameter.ID = environment.InitializationNumber;
    this.ttc_orderSearch();
  }
}

